class Api::UnavailabilitiesController < ApplicationController
  def index
    unavailabilites = Unavailability.all
    render json: unavailabilites
  end

  def show
    unavailability = Unavailability.find(params[:id])
    render json: unavailability
  end

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

  private
  
  def unavailability_params
    params.require(:unavailability).permit(:week_day, :all_day, :time_from, :time_to, :avalable_date)
  end
end
