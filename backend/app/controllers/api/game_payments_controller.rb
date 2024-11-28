class Api::GamePaymentsController < ApplicationController

  #GET /game_payments
  def index
    game_payments = GamePayment.all
    render json: game_payments
  end

  #GET /game_payments/:id
  def show
    game_payment = GamePayment.find(params[:id])
    render json: game_payment
  end
end
