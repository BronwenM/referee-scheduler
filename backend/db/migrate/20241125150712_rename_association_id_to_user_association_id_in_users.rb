class RenameAssociationIdToUserAssociationIdInUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :association_id, :user_association_id
  end
end
