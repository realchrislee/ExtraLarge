# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
5.times do
  User.create!(
      name: Faker::Cat.name,
      username: Faker::Internet.unique.user_name,
      password: 'password'
      )
end
User.create!(name: 'guest', username: 'guest', password: 'guestpass')

Story.destroy_all
15.times do
  Story.create!(
      title: Faker::RickAndMorty.unique.quote,
      body: Faker::Lorem.paragraph,
      author_id: User.all.sample.id
      )
end
