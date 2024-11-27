class Api::UsersController < ApplicationController
  
  #GET /users
  def index
    users = User.all
    render json: users
  end

  #GET /users/:id, includes role and associated permissions, plus error handling if user not found
  def show
    user = User.find(params[:id])
    render json: user, include: { role: { include: :permissions } }
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'User not found' }, status: :not_found
  end

  #POST /users, allows user creation plus role and permissions assignment
  def create
    role = Role.includes(:permissions).find_by(name: params[:role_name])

    if role
      user = User.new(user_params.merge(role: role))

      if user.save
        role.permissions.each do |permission|
          user.permissions << permission
        end

        render json: {
          user: user,
          permissions: user.permissions,
          message: "User created successfully with role '#{role.name}' and associated permissions."
          }, status: :created
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
