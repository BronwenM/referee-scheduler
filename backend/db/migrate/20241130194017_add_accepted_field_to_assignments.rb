class AddAcceptedFieldToAssignments < ActiveRecord::Migration[7.0]
  def change
    add_column :assignments, :accepted, :boolean
  end
end
