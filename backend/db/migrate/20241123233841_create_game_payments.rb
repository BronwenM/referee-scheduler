class CreateGamePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :game_pays do |t|
      t.string :game_type, null: false
      t.integer :pay_rate, null: false
      t.timestamps
    end

    add_index :game_pays, :game_type, unique: true
  end
end