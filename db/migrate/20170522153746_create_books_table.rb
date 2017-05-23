class CreateBooksTable < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |i|
      i.integer :user_id
      i.string :title
    end
  end
end
