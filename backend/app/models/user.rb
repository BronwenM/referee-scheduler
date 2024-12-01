class User < ApplicationRecord
  has_secure_password
  belongs_to :user_association, class_name: 'Association'
  # belongs_to :role
  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles
  has_many :assignments, foreign_key: :official_id
  # has_many :permissions, through: :user_roles

  #Both the if statements are checking if the user is a new account or if the password is present. If the user is a new account or the password is present, then the password and password confirmation are required. This to make sure the password is not required when the user information is being updated. 
  
  validates :password, presence: true, confirmation: true, if: -> { new_record? || password.present? }
  validates :password_confirmation, presence: true, if: -> { new_record? || password.present? }

  # attr_accessor :permissions

  # attribute :permissions, default: []
  
end
