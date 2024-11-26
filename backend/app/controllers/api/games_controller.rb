class Api::GamesController < ApplicationController
  def index
    games = Games.all
    render json: games
  end

  def show
    game = Games.find(params[:id])
    render json: game
  end
end
