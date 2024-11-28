class Api::PermissionsController < ApplicationController

  #GET /permissions
  def index
    permissions = Permission.all
    render json: permissions
  end

  #GET /permissions/:id
  def show
    permission = Permission.find(params[:id])
    render json: permission
  end
end
