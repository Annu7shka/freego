class AddImageToEvent < ActiveRecord::Migration[5.1]
  def up
    add_attachment :events, :image
  end

  def down
    remove_attachment :events, :image
  end
end
