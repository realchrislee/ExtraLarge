# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
5.times do |index|
  User.create!(username: Faker::Cat.unique.name, password: 'password')
end

Story.destroy_all
15.times do |index|
  Story.create!(
      title: Faker::RickAndMorty.unique.quote,
      body: Faker::Lorem.paragraph,
      author_id: User.all.sample.id
      )
end
