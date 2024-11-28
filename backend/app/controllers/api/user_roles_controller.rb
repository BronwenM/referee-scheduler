class Api::UserRolesController < ApplicationController

  #GET /user_roles
  def index
    user_roles = UserRole.all
    render json: user_roles
  end

  #GET /user_roles/:id
  def show
    user_role = UserRole.find(params[:id])
    render json: user_role
  end
end
