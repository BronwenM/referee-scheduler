class Association < ApplicationRecord
  belongs_to :root_user, class_name: 'User', optional: true #belongs_to was missing an underscore
  validates :name, presence: true
  validates :sport, presence: true
end
