class User < ApplicationRecord
  has_secure_password
  belongs_to :user_association, class_name: 'Association'
  # belongs_to :role
  has_many :user_roles, dependent: :destroy
  has_many :roles, through: :user_roles
  has_many :assignments, foreign_key: :official_id
  # has_many :permissions, through: :user_roles

  validates :password, presence: true, confirmation: true
  # validates :password_confirmation, presence: true

  # attr_accessor :permissions

  # attribute :permissions, default: []
  
end
