class CreateUserRoles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_roles do |t|
      t.references :role, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end  

    add_index :user_roles, [:role_id, :user_id], unique: true
  end  
end