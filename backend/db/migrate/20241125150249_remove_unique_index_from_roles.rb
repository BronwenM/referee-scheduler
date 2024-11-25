class RemoveUniqueIndexFromRoles < ActiveRecord::Migration[7.0]
  def change
    remove_index :roles, :name  # Removes the unique index on the name column
  end
end
