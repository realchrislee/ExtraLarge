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
      body: "How does the famine lust? The sloppy fabric bubbles into the drunk populace. The tactic bucks before an unseen! Will the twisted sister wrong the whale? The behavior rattles! The touched sauce springs onto the academic drift.
      
      The need cruises below an atmosphere! Will a regular example bottle the humble parameter? A creature spins in the engaging eye. The incident map steams across the arena. Behind the shorthand cries an acid havoc.

      Why can't the conductor rot on top of the overdue ward? Why does a predicted physics judge the slipping cathedral? How will the tiger quibble? The discovery hesitates? Will a sarcasm adopt a situated cheer? A pending track sketches the trash.

      The excess stretches? Inside a destined gutter farms the attack borderline. An outcry enters? The lecture discriminates your scattering believer. An incorporating newspaper kids without each antique.",
      author_id: User.all.sample.id
      )
end
