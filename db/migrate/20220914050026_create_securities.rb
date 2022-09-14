class CreateSecurities < ActiveRecord::Migration[7.0]
  def change
    create_table :securities do |t|
      t.string :place
      t.string :description
      t.string :country
      t.integer :casulaties

      t.timestamps
    end
  end
end
