class Game < ApplicationRecord
  belongs_to :user_association, class_name: 'User'

  has_many :assignments
  has_many :officials, through: :assignments, source: :official

  validates :title, :home_team, :away_team, :date_time, :location, :status, :game_type, presence: true
end
