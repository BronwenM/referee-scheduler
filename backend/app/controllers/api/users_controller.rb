class Api::UsersController < ApplicationController
  before_action :authorize_admin, only: :destroy
  
  #GET /users
  def index
    users = User.all
    render json: users
  end

  #GET /users/:id, includes role and associated permissions, plus error handling if user not found
  def show
    user = User.find(params[:id])
    render json: user, include: { roles: { include: :permissions }, assignments: {} }
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'User not found' }, status: :not_found
  end

  #GET /users/:id/assignments (get user assignments)
  def assignments_by_user_id
    if User.find_by("id=?", params[:user_id])
      user_assignments = Assignment.where("official_id=?", params[:user_id])
      user_full_assignment_data = user_assignments.map { |assignment| { assignment: assignment, partners: User.joins("LEFT JOIN assignments ON users.id = assignments.official_id").select("users.id, users.name, users.email, users.phone").select("assignments.position").where("game_id=? AND NOT users.id=?", assignment.game_id, assignment.official_id) , game: Game.where("id=?", assignment.game_id).first, pay_rate: GamePayment.select("id, pay_rate").find_by("id=?", assignment.game_payment_id), assigner: User.select("id, name, email, phone").find_by("id=?", assignment.assigner_id) } }

      render json: user_full_assignment_data
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  #POST /users, allows user creation plus role and permissions assignment
  def create    
    role = Role.includes(:permissions).find_by(name: params[:role_name])

    if role
      user = User.create!({**user_params, password: params[:password], password_confirmation: params[:password_confirmation]})
      
      UserRole.create!(user: user, role: role)
      
      if user.save
        #FIX THIS LATER
        # Rails.logger.info("user.roles: #{user.roles[0].permissions}")
        # role.permissions.each do |permission|
        #   user.permissions << permission
        # end
        
        render json: {
          user: user,
          permissions: user.roles[0].permissions,
          message: "User created successfully with role '#{role.name}' and associated permissions."
          }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Role not found' }, status: :unprocessable_entity
    end
  end

  #POST /users/edit
  def update
    user = User.find_by(id: params[:id])

    if user
      if user.update(user_params)
        if params[:role_name].present?
          role = Role.find_by(id: params[:id])
          if role
            user.update(role: role)
          else
            return render json: { error: 'Role not found' }, status: :unprocessable_entity
          end
        end

        render json: { user: user, message: 'User updated successfully' }, status: :ok
      else
        render json: { errors: user.errors.full_messaeges }, status: :unprocessable_entity
      end
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  #POST /users/delete
  def destroy
    user = User.find_by(id: params[:id])

    if user
      user.destroy
      render json: { message: 'User deleted successfully' }, status: :ok
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :username, :address, :phone, :user_association_id, :payment_info)
  end

  def authorize_admin
    unless current_user&.admin?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
