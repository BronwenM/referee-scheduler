class RenameGamePayIdToGamePaymentIdInAssignments < ActiveRecord::Migration[7.0]
  def change
    rename_column :assignments, :game_pay_id, :game_payment_id
  end
end
