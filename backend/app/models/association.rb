class Association < ApplicationRecord
  belongs to :root_user, class_name: 'User', optional: true
  validates :name, presence: true
  validates :sport, presence: true
end
