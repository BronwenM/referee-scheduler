class Api::PermissionsController < ApplicationController
  def index
    permissions = Permission.all
    render json: permissions
  end

  def show
    permission = Permission.find(params[:id])
    render json: permission
  end
end
