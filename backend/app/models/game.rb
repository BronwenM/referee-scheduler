class Game < ApplicationRecord
  belongs_to :user_association, class_name: 'Association'
end
