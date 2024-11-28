class Api::UnavailabilitiesController < ApplicationController

  #GET /unavailabilities
  def index
    unavailabilites = Unavailability.all
    render json: unavailabilites
  end

  #GET /unavailabilities/:id
  def show
    unavailability = Unavailability.find(params[:id])
    render json: unavailability
  end

  #POST /unavailabilities
  def create
    official = User.find_by(id: params[:official_id])

    unless official
      return render json: { error: 'Official not found' }, status: :not_found
    end

    unavailability = Unavailability.new(unavailability_params.merge(official: official))

    if unavailability.save
      render json: { unavailability: unavailability, message: 'Unavailability created successfully' }, status: :created
    else
      render json: { errors: unavailability.errors.full_messaeges }, status: :unprocessable_entity
    end
  end

  #POST /unavailabilites/edit
  def update
    unavailability = Unavailability.find_by(id: params[:id])

    if unavailability
      if unavailability.update(unavailability_params)
        render json: { unavailability: unavailability, message: 'Unavailability updated successfully' }, status: :ok
      else
        render json: { errors: unavailability.errors.full_messaeges }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Unavailability not found' }, status: :not_found
    end
  end

  private
  
  def unavailability_params
    params.require(:unavailability).permit(:week_day, :all_day, :time_from, :time_to, :avalable_date)
  end
end
