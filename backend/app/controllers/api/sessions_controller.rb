class Api::SessionsController < ApplicationController
  include ActionController::Cookies #Had to add this for cookies to work. Not sure if this is the best way to do it. I looked it up online.
  
  # Create and set cookies
  def create
    user = User.find_by(email: params[:email]) #joins("INNER JOIN user_roles ON users.id = user_roles.user_id") #TODO
    if user&.authenticate(params[:password])

      # When in production, Rails.env.production evaluates to true and enables secure option
      cookies.signed[:user_id] = { value: user.id, httponly: true, secure: Rails.env.production? }
      render json: { message: 'Logged in successfully', user: user}, status: :ok
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  # Delete cookies
  def destroy
    cookies.delete(:user_id)
    render json: { message: 'Logged out successfully' }, status: :ok
  end
end
