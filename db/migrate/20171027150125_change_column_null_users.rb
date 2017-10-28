class ChangeColumnNullUsers < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :name, false
  end
end
