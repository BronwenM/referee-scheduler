class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.references :association, null: false, foreign_key: true
      t.string :title, null: false
      t.string :home_team, null: false
      t.string :away_team, null: false
      t.timestamp :date_time, null: false
      t.text :location, null: false
      t.string :field
      t.boolean :officials_assigned, default: false, null: false
      t.string :status, default: "scheduled", null: false # upcoming, complete, cancelled, delayed
      t.string :game_type, null: false # what kind of game
      t.timestamps
    end
  end
end