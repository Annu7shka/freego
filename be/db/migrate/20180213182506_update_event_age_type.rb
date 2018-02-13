class UpdateEventAgeType < ActiveRecord::Migration[5.1]
  def up
    remove_column :events, :age_start, :datetime
    remove_column :events, :age_end, :datetime
    add_column :events, :age_start, :integer
    add_column :events, :age_end, :integer
  end
  def down
    remove_column :events, :age_start, :integer
    remove_column :events, :age_end, :integer
    add_column :events, :age_start, :datetime
    add_column :events, :age_end, :datetime
  end
end
