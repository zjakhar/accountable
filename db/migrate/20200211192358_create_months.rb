class CreateMonths < ActiveRecord::Migration[5.2]
  def change
    create_table :months do |t|
      t.belongs_to :user, null: false

      t.string :month, null: false
      t.timestamps
    end
  end
end
