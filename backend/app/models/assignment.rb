class Assignment < ApplicationRecord
  belongs_to :game
  belongs_to :official, class_name: 'User'
  belongs_to :assigner, class_name: 'User'
  belongs_to :game_pamenty
end
