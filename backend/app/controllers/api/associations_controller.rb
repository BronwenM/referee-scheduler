class Api::AssociationsController < ApplicationController

  #GET /associations
  def index
    associations = Association.all
    render json: associations
  end

  #GET /associations/:id
  def show
    association = Association.find(params[:id])
    render json: association
  end

  #POST /associations
  def create
    root_user = User.find_by(id: params[:root_user_id]) if params[:root_user_id]

    association = Association.new(
      name: params[:name],
      sport: params[:sport],
      root_user: root_user
    )

    if association.save
      render json: {
        association: association,
        message: 'Association created successfully'
      }, status: :created
    else
      render json: {
        errors: association.errors.full_messaeges
      }, status: :unprocessable_entity
    end
  end

  private
  
  def associatino_params
    params.require(association).permit(:name, :sport, :root_user_id)
  end
end
