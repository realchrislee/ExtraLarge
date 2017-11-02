class Story < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  has_attached_file :image, default_url: 'default.jpg', s3_protocol: :https
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
end
