# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
body = '
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur dignissim nibh, interdum dictum massa gravida a. Duis ac mattis nisi. Pellentesque non aliquet augue. Praesent sed mauris arcu. Proin efficitur rutrum nunc vel lobortis. Aliquam tincidunt ultricies dui, in finibus ex pharetra nec. Pellentesque varius sapien ut nisl sollicitudin semper. Aenean nulla tellus, aliquet eu erat sit amet, tempor tempus orci. Aliquam pretium, mauris quis luctus condimentum, dui enim facilisis tellus, nec interdum velit felis vitae arcu. Vivamus purus risus, iaculis ac auctor ut, aliquam nec ante. Ut id velit lobortis, faucibus nulla condimentum, dignissim nibh. Suspendisse potenti. Nunc malesuada quis mi interdum porta. Mauris non ipsum et erat condimentum eleifend. Fusce a sem felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Etiam dapibus velit sapien, vitae feugiat massa auctor in. Duis condimentum tellus in neque iaculis gravida. Duis congue accumsan finibus. Maecenas a sem vitae ligula viverra mollis a quis nunc. Vivamus ante sem, feugiat nec augue ut, semper maximus augue. Etiam mollis sodales elit, quis elementum neque. Cras efficitur diam ipsum, non aliquam ante ultrices in. Praesent sapien odio, scelerisque in justo eu, vehicula faucibus enim. Morbi fringilla quis leo et faucibus.

Proin ut eros eu ligula viverra lobortis. Phasellus eget nisi sit amet justo placerat eleifend quis quis lorem. Suspendisse potenti. Praesent ultricies tortor lectus, quis feugiat velit venenatis a. Vestibulum id eros id erat mattis vehicula vel eget tortor. Fusce quis mauris in metus mattis varius quis ut mi. Praesent pretium cursus turpis, et porta dui bibendum sit amet. Suspendisse ut fringilla neque. Vestibulum vestibulum finibus tortor, non aliquam libero convallis id. Praesent a orci bibendum, congue tellus sed, vulputate neque. Nulla ultricies dictum iaculis.

Duis dictum velit sed justo consequat, et ultrices eros rhoncus. Aliquam erat volutpat. Mauris pulvinar ultricies aliquet. Quisque dictum, est in iaculis convallis, metus dolor rutrum turpis, non euismod elit lectus id massa. Vivamus vehicula consectetur diam nec lobortis. In egestas arcu rutrum faucibus condimentum. Sed scelerisque velit in est interdum pretium. Vivamus eleifend luctus molestie. Proin ornare mauris vel erat bibendum, non aliquam dolor mollis. Pellentesque eget lectus quis sapien blandit lobortis. Sed lacus quam, tempor eget diam a, varius mattis lacus.

Maecenas imperdiet felis at aliquam sollicitudin. Sed sem dolor, rutrum gravida justo a, pulvinar cursus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut accumsan massa ante, eu volutpat justo vulputate in. Nunc dictum aliquam scelerisque. Nam sit amet arcu elementum, sodales orci at, rutrum risus. Etiam dui nulla, vestibulum tincidunt feugiat sit amet, feugiat at libero. Curabitur auctor arcu at ipsum molestie iaculis.'

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
16.times do
  Story.create!(
      title: Faker::Company.unique.catch_phrase,
      body: body,
      author_id: User.all.sample.id
      )
end

10.times do
  Story.create!(
      title: Faker::Company.unique.catch_phrase,
      body: body,
      author_id: User.find_by(name: 'guest').id
      )
end
