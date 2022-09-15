class AddImgUrlToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :imgurl, :string
  end
end
