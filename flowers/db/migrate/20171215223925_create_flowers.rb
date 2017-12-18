class CreateFlowers < ActiveRecord::Migration[5.1]
  def change
    create_table :flowers do |t|
      t.string :name
      t.string :sun_needs
      t.string :soil_needs
      t.integer :height
      t.string :bloom_time
      t.string :features

      t.timestamps
    end
  end
end
