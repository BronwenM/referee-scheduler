class Api::AssignmentsController < ApplicationController

  #GET /assignments
  def index
    assignments = Assignment.all
    render json: assignments
  end

  #GET /assignments/:id
  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  end

  #POST /assignments
  def create
    game = Game.find_by(id: params[:game_id])
    user = User.find_by(id: params[:user_id])
    assigner = User.find_by(id: params[:assigner_id])
    game_payment = GamePayment.find_by(id: params[:game_payment_id])

    if game.nil? || official.nil? || assigner.nil?
      return render json: { error: 'Game, Official, or Assigner not found' }, status: :unprocessable_entity
    end

    assignment = Assignment.new(
      game: game,
      official: official,
      assigner: assigner,
      position: params[:position],
      game_payment: game_payment
    )

    if assignment.save
      render json: { assignment: assignment, message: 'Assignment created successfully' }, status: :created
    else
      render json: { errors: assignment.errors.full_messaeges }, status: :unprocessable_entity
    end
  end

  private

  def assignment_params
    params.require(:assignment).permit(:game_id, :official_id, :assigner_id, :position, :game_payment_id)
  end
end
