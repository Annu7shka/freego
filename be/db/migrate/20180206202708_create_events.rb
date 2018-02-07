class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.datetime :start
      t.datetime :end
      t.string :event_type
      t.string :title
      t.string :description
      t.float :latitude
      t.float :longitude
      t.datetime :age_start
      t.datetime :age_end
      t.timestamps
    end
  end
end
