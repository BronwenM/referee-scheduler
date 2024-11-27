class Unavailability < ApplicationRecord
  belongs_to :official, class_name: 'User'

  validates :week_day, inclusion: { in: 1..7, message: 'must be between 1 and 7' }
  validates :time_from, presence: true, if: :not_all_day?
  validates :time_to, presence: true, if: :not_all_day?
  validates :all_day, inclusion: { in: [true, false] }
  validate :validate_all_day_and_time_fields

  private

  def not_all_day?
    !all_day
  end

  def validate_all_day_and_time_fields
    if all_day
      if time_from.present? || time_to.present?
        errors.add(:base, "When all_day is true, time_from and time_to must be blank.")
      end
    else
      if time_from.blank? || time_to.blank?
        errors.add(:base, "When all_day is false, time_from and time_to must be present.")
      end
    end
  end
end
