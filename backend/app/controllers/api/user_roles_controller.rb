class Api::UserRolesController < ApplicationController
  def index
    user_roles = UserRole.all
    render json: user_roles
  end

  def show
    user_role = UserRole.find(params[:id])
    render json: user_role
  end
end
