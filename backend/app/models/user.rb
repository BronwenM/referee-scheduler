class User < ApplicationRecord
  belongs_to :user_association, class_name: 'Association'
  has_secure_password
end
