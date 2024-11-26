class User < ApplicationRecord
  has_secure_password
  belongs_to :user_association, class_name: 'Association'
  belongs_to :role
end
