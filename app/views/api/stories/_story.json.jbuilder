json.extract! story, :id, :title, :body, :author_id
json.author_name story.author.name
json.avatar_url asset_path(story.author.avatar.url)
json.image_url asset_path(story.image.url)
