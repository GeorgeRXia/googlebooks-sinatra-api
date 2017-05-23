class CreateUsersTable < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |i|
      i.string :username
      i.string :password

    end
  end
end
