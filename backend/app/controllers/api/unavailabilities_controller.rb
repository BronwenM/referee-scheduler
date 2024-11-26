class Api::UnavailabilitiesController < ApplicationController
  def index
    unavailabilites = Unavailability.all
    render json: unavailabilites
  end

  def show
    unavailability = Unavailability.find(params[:id])
    render json: unavailability
  end
end
