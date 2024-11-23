class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.references :game, foreign_key: true
      t.references :official, null: false, foreign_key: { to_table: :users }
      t.references :assigner, null: false, foreign_key: { to_table: :users }
      t.string :position
      t.references :game_pay, foreign_key: true
      t.timestamps
    end

    add_index :assignments, [:game_id, :official_id], unique: true
  end
end