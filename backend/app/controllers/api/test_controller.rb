
  class Api::TestController < ApplicationController
    def index
      render json: { message: 'Testing Backend is connected!' }
    end
  end
