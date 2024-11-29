class Api::GamesController < ApplicationController
  before_action :authorize_user, only: [:destroy] #before_action was missing an underscore it was giving an error

  # GET /games
  def index
    games = Game.all
    render json: games
  end

  # GET /games/:id
  def show
    game = Game.includes(:officials).find(params[:id])
    render json: {
      id: game.id,
      title: game.title,
      home_team: game.home_team,
      away_team: game.away_team,
      date_time: game.date_time,
      location: game.location,
      field: game.field,
      status: game.status,
      game_type: game.game_type,
      officials_assigned: game.officials.any?,
      officials: game.officials.map { |official| { id: official.id, name: official.name, email: official.email } }
    }
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Game not found' }, status: :not_found
  end

  # GET /games/unassigned
  def find_unassigned
    games = Game.left_joins(:assignments).where(assignments: { id: nil })
    render json: games
  end

  # POST /games
  def create
    Rails.logger.info("Received parameters:\n#{JSON.pretty_generate(params.to_unsafe_h)}")
    game = Game.new(game_params)

    if game.save
      render json: { game: game, message: 'Game created successfully' }, status: :created
    else
      render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /games/:id
  def destroy
    game = Game.find_by(id: params[:id])

    if game
      game.destroy
      render json: { message: 'Game deleted successfully' }, status: :ok
    else
      render json: { error: 'Game not found' }, status: :not_found
    end
  end

  private

  def game_params
    params.require(:game).permit(
      :user_association_id,
      :title,
      :home_team,
      :away_team,
      :date_time,
      :location,
      :field,
      :officials_assigned,#This was missing from the original code
      :status,
      :game_type
    )
  end

  def authorize_user
    game = Game.find(params[:id])
    unless current_user.admin?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Game not found' }, status: :not_found
  end
end