class SessionsController < ApplicationController
  
  # Create and set cookies
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])

      # When in production, Rails.env.production evaluates to true and enables secure option
      cookies.signed[:user_id] = { value: user.id, httponly: true, secure: Rails.env.production? }
      render json: { message: 'Logged in successfully' }, status: :ok
    else
      render json: { errpr: 'Ivalid credentials' }, status: :unauthorized
    end
  end

  # Delete cookies
  def destroy
    cookies.delete(:user_id)
    render json: { message: 'Logged out successfully' }, status: :ok
  end
end
