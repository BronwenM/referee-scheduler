class Api::GamePaymentsController < ApplicationController
  def index
    game_payments = GamePayment.all
    render json: game_payments
  end

  def show
    game_payment = GamePayment.find(params[:id])
    render json: game_payment
  end
end
