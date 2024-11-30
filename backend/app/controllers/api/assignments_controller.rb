class Api::AssignmentsController < ApplicationController
  before_action :authorize_assigner, only: [:destroy]

  #GET /assignments
  def index
    assignments = Assignment.all
    render json: assignments
  end

  #GET /assignments/:id
  def show
    assignment = Assignment.find(params[:id])
    render json: assignment
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Assignment not found' }, status: :not_found
  end

  

  #POST /assignments
  def create
    #This prints to the console for debugging purposes
    Rails.logger.info("Received parameters:\n#{JSON.pretty_generate(params.to_unsafe_h)}")

    game = Game.find_by(id: params[:game_id])
    official = User.find_by(id: params[:official_id])
    assigner = User.find_by(id: params[:assigner_id])
    game_payment = GamePayment.find_by(id: params[:game_payment_id])

    #This prints to the console for debugging purposes
    Rails.logger.info("Game: #{game.inspect}")
    Rails.logger.info("official: #{official.inspect}")
    Rails.logger.info("Assigner: #{assigner.inspect}") 

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
    Rails.logger.info("Assignment: #{assignment.pretty_inspect}") #This prints to the console for debugging purposes
    

    if assignment.save
      render json: { assignment: assignment, message: 'Assignment created successfully' }, status: :created
    else
      render json: { errors: assignment.errors.full_messaeges }, status: :unprocessable_entity
    end
  end
  
  #POST /assignments/delete
  def destroy
    assignment = Assignment.find_by(id: params[:id])
    
    if assignment
      assignment.destroy
      render json: { message: 'Assignment deleted successfully' }, status: :ok
    else
      render json: { error: 'Assignment not found' }, status: :not_found
    end
  end

  private
  
  def assignment_params
    params.require(:assignment).permit(:game_id, :official_id, :assigner_id, :position, :game_payment_id)
  end  

  def authorize_assigner
    assignment = Assignment.find(params[:id])
    unless current_user == assignment.assigner || current_user.admin?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Assignment not found' }, status: :not_found
  end
end