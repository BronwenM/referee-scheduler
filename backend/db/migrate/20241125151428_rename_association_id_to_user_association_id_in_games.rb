class RenameAssociationIdToUserAssociationIdInGames < ActiveRecord::Migration[7.0]
  def change
    rename_column :games, :association_id, :user_association_id
  end
end
