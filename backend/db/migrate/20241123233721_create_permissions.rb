class CreatePermissions < ActiveRecord::Migration[7.0]
  def change
    create_table :permissions do |t|
      t.references :role, null: false, foreign_key: true
      t.string :action_name, null: false
      t.timestamps
    end

    add_index :permissions, [:role_id, :action_name], unique: true
  end
end