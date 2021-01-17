class CreateBuildings < ActiveRecord::Migration[6.0]
  def change
    create_table :buildings do |t|
      t.string :year_built
      t.string :description
      t.string :address
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
