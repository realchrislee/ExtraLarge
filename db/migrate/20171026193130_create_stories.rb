class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :stories, [:author_id], unique: true
    add_index :stories, [:title]
  end
end
