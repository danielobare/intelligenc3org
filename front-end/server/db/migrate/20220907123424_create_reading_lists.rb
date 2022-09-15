class CreateReadingLists < ActiveRecord::Migration[6.1]
  def change
    create_table :reading_lists do |t|
      t.string :book_name
    end
  end
end
