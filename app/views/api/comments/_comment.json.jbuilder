json.extract! comment, :id, :body, :story_id, :author_id, :parent_id
json.comment_url asset_path(comment.author.avatar.url)
json.author comment.author.name
