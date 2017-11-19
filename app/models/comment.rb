class Comment < ApplicationRecord
  validates :body, :story_id, :author_id, presence: true

  belongs_to :story,
    class_name: 'Story',
    foreign_key: :story_id

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :parent,
    class_name: 'Comment',
    foreign_key: :parent_id,
    optional: true

  has_many :children,
    class_name: 'Comment',
    foreign_key: :parent_id

end
