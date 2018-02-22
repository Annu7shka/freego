class CreateSlides < ActiveRecord::Migration[5.1]
  def change
    create_table :slides do |t|
      t.attachment :image
      t.string :title
      t.string :description
      t.string :link
      t.timestamps
    end
  end
end
