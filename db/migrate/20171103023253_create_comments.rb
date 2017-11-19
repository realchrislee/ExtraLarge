class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :story_id, null: false
      t.integer :parent_id
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :comments, [:story_id]
    add_index :comments, [:parent_id]
    add_index :comments, [:author_id]
  end
end
