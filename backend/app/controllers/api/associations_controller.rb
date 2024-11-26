class Api::AssociationsController < ApplicationController
  def index
    associations = Association.all
    render json: associations
  end

  def show
    association = Association.find(params[:id])
    render json: association
  end
end
