json.extract! user, :id, :username, :name
json.avatar_url asset_path(user.avatar.url)
