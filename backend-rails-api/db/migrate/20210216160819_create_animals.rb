class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :breed
      t.string :image

      t.timestamps
    end
  end
end
