class Unavailability < ApplicationRecord
  belongs_to :official, class_name: 'User'

  validate :validate_all_day_and_time_fields

  private

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
