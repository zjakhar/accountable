class CreateLineitems < ActiveRecord::Migration[5.2]
  def change
    create_table :lineitems do |t|
      t.belongs_to :month, null: false
      t.belongs_to :user, null: false

      t.string :category, null: false
      t.string :lineitem, null: false
      t.integer :value, null: false, default: 0

      t.timestamps
    end
  end
end
