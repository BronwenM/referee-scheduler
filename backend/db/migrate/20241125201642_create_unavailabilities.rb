class CreateUnavailabilities < ActiveRecord::Migration[7.0]
  def change
    create_table :unavailabilities do |t|
      t.references :official, null: false, foreign_key: { to_table: :users }
      t.integer :week_day
      t.boolean :all_day, null: false, default: false
      t.time :time_from
      t.time :time_to
      t.date :available_date

      t.timestamps
    end

    # CHECK constraint ensures time_from and time_to are null if user is unavailable all day
    execute <<-SQL
      ALTER TABLE unavailabilities
      ADD CONSTRAINT check_all_day_time_constraints
      CHECK (
        (all_day = true AND time_from IS NULL AND time_to IS NULL) OR
        (all_day = false AND time_from IS NOT NULL AND time_to IS NOT NULL)
      );
    SQL
  end
end
