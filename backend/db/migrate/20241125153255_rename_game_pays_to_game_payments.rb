class RenameGamePaysToGamePayments < ActiveRecord::Migration[7.0]
  def change
    # Rename the table
    rename_table :game_pays, :game_payments
    
    # Remove the unique constraint on game_type
    remove_index :game_payments, :game_type if index_exists?(:game_payments, :game_type)
    
    # Recreate the index without the unique constraint
    add_index :game_payments, :game_type
  end
end
