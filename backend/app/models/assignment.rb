class Assignment < ApplicationRecord
  belongs_to :game
  belongs_to :official
  belongs_to :assigner
  belongs_to :game_pay
end
