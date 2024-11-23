class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.references :association, foreign_key: true
      t.string :name, null: false
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.text :address
      t.string :phone
      t.text :payment_info
      t.timestamps
    end
  end
end