class Api::AssignmentsController < ApplicationController
  def index
    assignmenst = Assignment.all
    render json: assignmenst
  end

  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  end
end
