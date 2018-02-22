class AddAddressAndUrlToEvents < ActiveRecord::Migration[5.1]
  def up
    add_column :events, :address, :string
    add_column :events, :url, :string
  end
  def down
    remove_column :events, :address, :string
    remove_column :events, :url, :string
  end
end
