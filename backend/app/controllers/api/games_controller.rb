class Api::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
  end

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
      officials: game.officials.map { |official| { id: official.id, name: official.name } } #work official email in as well
    }
  end

  def find_unassigned
    games = Game.left_joins(:assignments).where(assignments: { id: nil })
    render json: games
  end

  def create
    game = Game.new(game_params)

    if game.save
      render json: { game: game, message: 'Game created successfully' }, status: :created
    else
      render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
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
      :status,
      :game_type
    )
  end
end
