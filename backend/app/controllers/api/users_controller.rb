class Api::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    role = Role.find_by(name: params[:role_name])

    if role
      user = User.new(user_params.merge(role: role))

      if user.save
        render json: { user: user, message: "User created successfully with role '#{role.name}'" }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Role not found' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :username)
  end
end
