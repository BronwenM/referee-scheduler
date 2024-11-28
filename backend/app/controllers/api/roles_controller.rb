class Api::RolesController < ApplicationController

  #GET /roles
  def index
    roles = Role.all
    render json: roles
  end

  #GET /roles/:id
  def show
    role = Role.find(params[:id])
    render json: role
  end
end
