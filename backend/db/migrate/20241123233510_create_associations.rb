class CreateAssociations < ActiveRecord::Migration[7.0]
  def change
    create_table :associations do |t|
      t.string :name, null: false
      t.string :sport, null: false
      t.timestamps
    end
  end
end