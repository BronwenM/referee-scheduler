# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create associations
puts 'Creating associations'
association1 = Association.create(name: 'Diamond Softball League', sport: 'Softball')
puts 'Associations created'

# Create roles
puts 'Creating roles'
admin = Role.create!(name: 'admin', description: 'Administrator role with full CRUD access')
assigner = Role.create!(name: 'assigner', description: 'Assigner with CRUD access to assignments')
official = Role.create!(name: 'official', description: 'Official with read-only access to assignments')
puts 'Roles created'

# Create Users
puts 'Creating users'
user1 = User.create!(
  user_association: association1,
  name: 'Jordan Matthews',
  username: 'jormat',
  email: 'jordan@matthews.com',
  password: 'cafddl1k8pm',
  address: '1234 Oakwood Drive',
  phone: 5551234567,
  payment_info: ''
)

user2 = User.create!(
  user_association: association1,
  name: 'Emily Johnson',
  username: 'emjohnson92',
  email: 'emily.johnson92@example.com',
  password: 'wq3de8pL9x2',
  address: '5678 Pine Street',
  phone: 5559876543,
  payment_info: ''
)

user3 = User.create!(
  user_association: association1,
  name: 'Michael Thompson',
  username: 'mike_t23',
  email: 'michael.thompson23@example.com',
  password: 'mike2t4r9@56',
  address: '9876 Maple Lane',
  phone: 5555647382,
  payment_info: ''
)

user4 = User.create!(
  user_association: association1,
  name: 'Olivia Davis',
  username: 'olivdavis78',
  email: 'olivia.davis78@example.com',
  password: 'osd9j8ckV5',
  address: '1234 Willow Creek Rd',
  phone: 5556723498,
  payment_info: ''
)

user5 = User.create!(
  user_association: association1,
  name: 'Ethan Wilson',
  username: 'ethanwilson21',
  email: 'ethan.wilson21@example.com',
  password: 'ew2p6bnNq4',
  address: '8763 Pinewood Ave',
  phone: 5555638901,
  payment_info: ''
)

user6 = User.create!(
  user_association: association1,
  name: 'Sophia Garcia',
  username: 'sophiag22',
  email: 'sophia.garcia22@example.com',
  password: 'sg@5q3jvP0',
  address: '3421 Oakridge Blvd',
  phone: 5554871223,
  payment_info: ''
)

user7 = User.create!(
  user_association: association1,
  name: 'Liam Miller',
  username: 'liam_miller18',
  email: 'liam.miller18@example.com',
  password: 'lm3xy7zPk0',
  address: '1285 Maplewood Ln',
  phone: 5554298763,
  payment_info: ''
)

user8 = User.create!(
  user_association: association1,
  name: 'Ava Martinez',
  username: 'avamartinez95',
  email: 'ava.martinez95@example.com',
  password: 'am5j6bKt9',
  address: '7642 Cedar Hill Dr',
  phone: 5553124789,
  payment_info: ''
)

user9 = User.create!(
  user_association: association1,
  name: 'James Anderson',
  username: 'jamesanderson22',
  email: 'james.anderson22@example.com',
  password: 'ja2m3x5plR9',
  address: '5921 Birch Street',
  phone: 5551237890,
  payment_info: ''
)

user10 = User.create!(
  user_association: association1,
  name: 'Isabella Harris',
  username: 'isaharris34',
  email: 'isabella.harris34@example.com',
  password: 'ih4v5t9hM0',
  address: '8372 Cherry Lane',
  phone: 5552145789,
  payment_info: ''
)

user11 = User.create!(
  user_association: association1,
  name: 'Lucas Clark',
  username: 'lucasclark56',
  email: 'lucas.clark56@example.com',
  password: 'lc8v3r9pB0',
  address: '7423 Spruce Road',
  phone: 5553094687,
  payment_info: ''
)

user12 = User.create!(
  user_association: association1,
  name: 'Mia Lee',
  username: 'mialee87',
  email: 'mia.lee87@example.com',
  password: 'ml3g1jw2Ks',
  address: '6429 Elmwood Ave',
  phone: 5556781234,
  payment_info: ''
)

user13 = User.create!(
  user_association: association1,
  name: 'Jack Taylor',
  username: 'jacktaylor99',
  email: 'jack.taylor99@example.com',
  password: 'jt2m8rH6b5',
  address: '3821 Pinecrest Way',
  phone: 5554562387,
  payment_info: ''
)

user14 = User.create!(
  user_association: association1,
  name: 'Amelia Young',
  username: 'amelia_young42',
  email: 'amelia.young42@example.com',
  password: 'ay4z7tRm9f',
  address: '1987 Walnut Circle',
  phone: 5558213456,
  payment_info: ''
)

user15 = User.create!(
  user_association: association1,
  name: 'Benjamin Walker',
  username: 'benjaminwalker23',
  email: 'benjamin.walker23@example.com',
  password: 'bw5p9gqZ8v',
  address: '9102 Pine Valley Dr',
  phone: 5559724536,
  payment_info: ''
)

user16 = User.create!(
  user_association: association1,
  name: 'Charlotte Moore',
  username: 'charlottemoore78',
  email: 'charlotte.moore78@example.com',
  password: 'cm0x2wG9jz',
  address: '2534 Cedarwood Ave',
  phone: 5553456789,
  payment_info: ''
)

user17 = User.create!(
  user_association: association1,
  name: 'William King',
  username: 'williamking51',
  email: 'william.king51@example.com',
  password: 'wk5t9yFu2b',
  address: '1285 Riverbend Road',
  phone: 5556204598,
  payment_info: ''
)

user18 = User.create!(
  user_association: association1,
  name: 'Zoe Rodriguez',
  username: 'zoerodriguez44',
  email: 'zoe.rodriguez44@example.com',
  password: 'zr7v8yPe0m',
  address: '6345 Lakeview Blvd',
  phone: 5555098732,
  payment_info: ''
)

user19 = User.create!(
  user_association: association1,
  name: 'Daniel Evans',
  username: 'daniel_evans22',
  email: 'daniel.evans22@example.com',
  password: 'de2m7gHs8p',
  address: '4748 Rosewood Ave',
  phone: 5553147820,
  payment_info: ''
)

user20 = User.create!(
  user_association: association1,
  name: 'Grace Wright',
  username: 'gracewright65',
  email: 'grace.wright65@example.com',
  password: 'gw5h8tLs9j',
  address: '1025 Sunset Blvd',
  phone: 5552369847,
  payment_info: ''
)

user21 = User.create!(
  user_association: association1,
  name: 'Alexander Scott',
  username: 'alexanderscott17',
  email: 'alexander.scott17@example.com',
  password: 'as4z6uN5d9',
  address: '2943 Birchwood Ave',
  phone: 5557086925,
  payment_info: ''
)

user22 = User.create!(
  user_association: association1,
  name: 'Ella Green',
  username: 'ellagreen55',
  email: 'ella.green55@example.com',
  password: 'eg5l3gN8yP',
  address: '8317 Maplewood Rd',
  phone: 5554837261,
  payment_info: ''
)

user23 = User.create!(
  user_association: association1,
  name: 'Noah Adams',
  username: 'noahadams66',
  email: 'noah.adams66@example.com',
  password: 'na2r7jQ1sO',
  address: '5612 Valley Stream Rd',
  phone: 5553125768,
  payment_info: ''
)

user24 = User.create!(
  user_association: association1,
  name: 'Avery Perez',
  username: 'averyperez99',
  email: 'avery.perez99@example.com',
  password: 'ap8q2wZ9uK',
  address: '1034 Highland Park Blvd',
  phone: 5556398172,
  payment_info: ''
)

user25 = User.create!(
  user_association: association1,
  name: 'Matthew Nelson',
  username: 'matthew_nelson23',
  email: 'matthew.nelson23@example.com',
  password: 'mn7t3j8X0q',
  address: '9832 Greenfield Ave',
  phone: 5556729834,
  payment_info: ''
)

user26 = User.create!(
  user_association: association1,
  name: 'Megan Carter',
  username: 'megancarter88',
  email: 'megan.carter88@example.com',
  password: 'mc6j9gG4rK',
  address: '2274 Oak Grove Rd',
  phone: 5557361829,
  payment_info: ''
)

user27 = User.create!(
  user_association: association1,
  name: 'Ryan Mitchell',
  username: 'ryanmitchell45',
  email: 'ryan.mitchell45@example.com',
  password: 'rm9p5oF2dT',
  address: '3541 Chestnut Ave',
  phone: 5558014623,
  payment_info: ''
)

user28 = User.create!(
  user_association: association1,
  name: 'Scarlett Perez',
  username: 'scarlettperez77',
  email: 'scarlett.perez77@example.com',
  password: 'sp0v8iJ9uX',
  address: '1164 Ivy Drive',
  phone: 5559637412,
  payment_info: ''
)

user29 = User.create!(
  user_association: association1,
  name: 'David Robinson',
  username: 'davidrobinson30',
  email: 'david.robinson30@example.com',
  password: 'dr6r7uY1cN',
  address: '7865 Crescent Blvd',
  phone: 5558245793,
  payment_info: ''
)

user30 = User.create!(
  user_association: association1,
  name: 'Lily Harris',
  username: 'lilyharris56',
  email: 'lily.harris56@example.com',
  password: 'lh5p9eI3dQ',
  address: '4123 Maplewood Dr',
  phone: 5557412568,
  payment_info: ''
)

test_user = User.create!(
  user_association: association1,
  name: 'Test User',
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  address: 'test',
  phone: 1,
  payment_info: ''
)

puts 'Users created'

# Create Unavailabilities
puts 'Creating Unavailabilities'
user9_monday = Unavailability.create!(
  official: user9,
  week_day: 1,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user9_tuesday = Unavailability.create!(
  official: user9,
  week_day: 2,
  all_day: false,
  time_from: '09:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user9_wednesday = Unavailability.create!(
  official: user9,
  week_day: 3,
  all_day: false,
  time_from: '09:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user9_thursday = Unavailability.create!(
  official: user9,
  week_day: 4,
  all_day: false,
  time_from: '12:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user9_friday = Unavailability.create!(
  official: user9,
  week_day: 5,
  all_day: false,
  time_from: '12:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user9_saturday = Unavailability.create!(
  official: user9,
  week_day: 6,
  all_day: false,
  time_from: '07:00:00',
  time_to: '09:00:00',
  available_date: nil
)

user9_sunday = Unavailability.create!(
  official: user9,
  week_day: 7,
  all_day: false,
  time_from: '07:00:00',
  time_to: '09:00:00',
  available_date: nil
)

#REMOVED ALL UNAVAILABLITIES FOR USER 10: ISABELLE FOR DEMO PURPOSES
# user10_monday = Unavailability.create!(
#   official: user10,
#   week_day: 1,
#   all_day: true,
#   time_from: nil,
#   time_to: nil,
#   available_date: nil
# )

# user10_tuesday = Unavailability.create!(
#   official: user10,
#   week_day: 2,
#   all_day: false,
#   time_from: '08:00:00',
#   time_to: '12:00:00',
#   available_date: nil
# )

# user10_wednesday = Unavailability.create!(
#   official: user10,
#   week_day: 3,
#   all_day: true,
#   time_from: nil,
#   time_to: nil,
#   available_date: nil
# )

# user10_thursday = Unavailability.create!(
#   official: user10,
#   week_day: 4,
#   all_day: false,
#   time_from: '14:00:00',
#   time_to: '22:00:00',
#   available_date: nil
# )

# user10_friday = Unavailability.create!(
#   official: user10,
#   week_day: 5,
#   all_day: true,
#   time_from: nil,
#   time_to: nil,
#   available_date: nil
# )

# user10_saturday = Unavailability.create!(
#   official: user10,
#   week_day: 6,
#   all_day: false,
#   time_from: '10:00:00',
#   time_to: '18:00:00',
#   available_date: nil
# )

# user10_sunday = Unavailability.create!(
#   official: user10,
#   week_day: 7,
#   all_day: true,
#   time_from: nil,
#   time_to: nil,
#   available_date: nil
# )

user11_monday = Unavailability.create!(
  official: user11,
  week_day: 1,
  all_day: false,
  time_from: '09:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user11_tuesday = Unavailability.create!(
  official: user11,
  week_day: 2,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user11_wednesday = Unavailability.create!(
  official: user11,
  week_day: 3,
  all_day: false,
  time_from: '10:00:00',
  time_to: '15:00:00',
  available_date: nil
)

user11_thursday = Unavailability.create!(
  official: user11,
  week_day: 4,
  all_day: false,
  time_from: '08:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user11_friday = Unavailability.create!(
  official: user11,
  week_day: 5,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user11_saturday = Unavailability.create!(
  official: user11,
  week_day: 6,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user11_sunday = Unavailability.create!(
  official: user11,
  week_day: 7,
  all_day: false,
  time_from: '14:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user12_monday = Unavailability.create!(
  official: user12,
  week_day: 1,
  all_day: false,
  time_from: '13:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user12_tuesday = Unavailability.create!(
  official: user12,
  week_day: 2,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user12_wednesday = Unavailability.create!(
  official: user12,
  week_day: 3,
  all_day: false,
  time_from: '07:00:00',
  time_to: '10:00:00',
  available_date: nil
)

user12_thursday = Unavailability.create!(
  official: user12,
  week_day: 4,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user12_friday = Unavailability.create!(
  official: user12,
  week_day: 5,
  all_day: false,
  time_from: '11:00:00',
  time_to: '14:00:00',
  available_date: nil
)

user12_saturday = Unavailability.create!(
  official: user12,
  week_day: 6,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user12_sunday = Unavailability.create!(
  official: user12,
  week_day: 7,
  all_day: false,
  time_from: '09:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user13_monday = Unavailability.create!(
  official: user13,
  week_day: 1,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user13_tuesday = Unavailability.create!(
  official: user13,
  week_day: 2,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user13_wednesday = Unavailability.create!(
  official: user13,
  week_day: 3,
  all_day: false,
  time_from: '12:00:00',
  time_to: '16:00:00',
  available_date: nil
)

user13_thursday = Unavailability.create!(
  official: user13,
  week_day: 4,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user13_friday = Unavailability.create!(
  official: user13,
  week_day: 5,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user13_saturday = Unavailability.create!(
  official: user13,
  week_day: 6,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user13_sunday = Unavailability.create!(
  official: user13,
  week_day: 7,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user14_monday = Unavailability.create!(
  official: user14,
  week_day: 1,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user14_tuesday = Unavailability.create!(
  official: user14,
  week_day: 2,
  all_day: false,
  time_from: '06:00:00',
  time_to: '08:00:00',
  available_date: nil
)

user14_wednesday = Unavailability.create!(
  official: user14,
  week_day: 3,
  all_day: false,
  time_from: '05:00:00',
  time_to: '07:00:00',
  available_date: nil
)

user14_thursday = Unavailability.create!(
  official: user14,
  week_day: 4,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user14_friday = Unavailability.create!(
  official: user14,
  week_day: 5,
  all_day: false,
  time_from: '07:00:00',
  time_to: '09:00:00',
  available_date: nil
)

user14_saturday = Unavailability.create!(
  official: user14,
  week_day: 6,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user14_sunday = Unavailability.create!(
  official: user14,
  week_day: 7,
  all_day: false,
  time_from: '12:00:00',
  time_to: '15:00:00',
  available_date: nil
)

user15_monday = Unavailability.create!(
  official: user15,
  week_day: 1,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user15_tuesday = Unavailability.create!(
  official: user15,
  week_day: 2,
  all_day: false,
  time_from: '15:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user15_wednesday = Unavailability.create!(
  official: user15,
  week_day: 3,
  all_day: false,
  time_from: '09:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user15_thursday = Unavailability.create!(
  official: user15,
  week_day: 4,
  all_day: false,
  time_from: '10:00:00',
  time_to: '14:00:00',
  available_date: nil
)

user15_friday = Unavailability.create!(
  official: user15,
  week_day: 5,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user15_saturday = Unavailability.create!(
  official: user15,
  week_day: 6,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user15_sunday = Unavailability.create!(
  official: user15,
  week_day: 7,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user16_monday = Unavailability.create!(
  official: user16,
  week_day: 1,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user16_tuesday = Unavailability.create!(
  official: user16,
  week_day: 2,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user16_wednesday = Unavailability.create!(
  official: user16,
  week_day: 3,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user16_thursday = Unavailability.create!(
  official: user16,
  week_day: 4,
  all_day: false,
  time_from: '10:00:00',
  time_to: '14:00:00',
  available_date: nil
)

user16_friday = Unavailability.create!(
  official: user16,
  week_day: 5,
  all_day: false,
  time_from: '15:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user16_saturday = Unavailability.create!(
  official: user16,
  week_day: 6,
  all_day: false,
  time_from: '12:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user16_sunday = Unavailability.create!(
  official: user16,
  week_day: 7,
  all_day: false,
  time_from: '09:00:00',
  time_to: '13:00:00',
  available_date: nil
)

user17_monday = Unavailability.create!(
  official: user17,
  week_day: 1,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user17_tuesday = Unavailability.create!(
  official: user17,
  week_day: 2,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user17_wednesday = Unavailability.create!(
  official: user17,
  week_day: 3,
  all_day: false,
  time_from: '13:00:00',
  time_to: '15:00:00',
  available_date: nil
)

user17_thursday = Unavailability.create!(
  official: user17,
  week_day: 4,
  all_day: false,
  time_from: '10:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user17_friday = Unavailability.create!(
  official: user17,
  week_day: 5,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user17_saturday = Unavailability.create!(
  official: user17,
  week_day: 6,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user17_sunday = Unavailability.create!(
  official: user17,
  week_day: 7,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user17_wednesday = Unavailability.create!(
  official: user17,
  week_day: 3,
  all_day: false,
  time_from: '13:00:00',
  time_to: '15:00:00',
  available_date: nil
)

user17_thursday = Unavailability.create!(
  official: user17,
  week_day: 4,
  all_day: false,
  time_from: '10:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user17_friday = Unavailability.create!(
  official: user17,
  week_day: 5,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user19_monday = Unavailability.create!(
  official: user19,
  week_day: 1,
  all_day: false,
  time_from: '09:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user19_tuesday = Unavailability.create!(
  official: user19,
  week_day: 2,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user19_wednesday = Unavailability.create!(
  official: user19,
  week_day: 3,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user19_thursday = Unavailability.create!(
  official: user19,
  week_day: 4,
  all_day: false,
  time_from: '10:00:00',
  time_to: '14:00:00',
  available_date: nil
)

user19_friday = Unavailability.create!(
  official: user19,
  week_day: 5,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user19_saturday = Unavailability.create!(
  official: user19,
  week_day: 6,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user19_sunday = Unavailability.create!(
  official: user19,
  week_day: 7,
  all_day: false,
  time_from: '08:00:00',
  time_to: '11:00:00',
  available_date: nil
)

user20_unavailabilities = []

(1..7).each do |day|
  user20_unavailabilities << Unavailability.create!(
    official: user20,  # Use the User object here
    week_day: day,
    all_day: false,
    time_from: '08:00:00',
    time_to: '17:00:00',
    available_date: nil
  )
end

user21_monday = Unavailability.create!(
  official: user21,
  week_day: 1,
  all_day: false,
  time_from: '13:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user21_tuesday = Unavailability.create!(
  official: user21,
  week_day: 2,
  all_day: false,
  time_from: '12:00:00',
  time_to: '16:00:00',
  available_date: nil
)

user21_wednesday = Unavailability.create!(
  official: user21,
  week_day: 3,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user21_thursday = Unavailability.create!(
  official: user21,
  week_day: 4,
  all_day: false,
  time_from: '13:00:00',
  time_to: '17:00:00',
  available_date: nil
)

user21_friday = Unavailability.create!(
  official: user21,
  week_day: 5,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

user21_saturday = Unavailability.create!(
  official: user21,
  week_day: 6,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user21_sunday = Unavailability.create!(
  official: user21,
  week_day: 7,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user22_monday = Unavailability.create!(
  official: user22,
  week_day: 1,
  all_day: false,
  time_from: '08:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user22_tuesday = Unavailability.create!(
  official: user22,
  week_day: 2,
  all_day: false,
  time_from: '07:00:00',
  time_to: '11:00:00',
  available_date: nil
)

user22_wednesday = Unavailability.create!(
  official: user22,
  week_day: 3,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user22_thursday = Unavailability.create!(
  official: user22,
  week_day: 4,
  all_day: false,
  time_from: '08:00:00',
  time_to: '12:00:00',
  available_date: nil
)

user22_friday = Unavailability.create!(
  official: user22,
  week_day: 5,
  all_day: false,
  time_from: '09:00:00',
  time_to: '13:00:00',
  available_date: nil
)

user22_saturday = Unavailability.create!(
  official: user22,
  week_day: 6,
  all_day: false,
  time_from: '10:00:00',
  time_to: '14:00:00',
  available_date: nil
)

user22_sunday = Unavailability.create!(
  official: user22,
  week_day: 7,
  all_day: false,
  time_from: '09:00:00',
  time_to: '11:00:00',
  available_date: nil
)

user23_monday = Unavailability.create!(
  official: user23,
  week_day: 1,
  all_day: false,
  time_from: '17:00:00',
  time_to: '21:00:00',
  available_date: nil
)

user23_tuesday = Unavailability.create!(
  official: user23,
  week_day: 2,
  all_day: false,
  time_from: '16:00:00',
  time_to: '20:00:00',
  available_date: nil
)

user23_wednesday = Unavailability.create!(
  official: user23,
  week_day: 3,
  all_day: true,
  time_from: nil,
  time_to: nil,
  available_date: nil
)

user23_thursday = Unavailability.create!(
  official: user23,
  week_day: 4,
  all_day: false,
  time_from: '18:00:00',
  time_to: '22:00:00',
  available_date: nil
)

user23_friday = Unavailability.create!(
  official: user23,
  week_day: 5,
  all_day: false,
  time_from: '19:00:00',
  time_to: '23:00:00',
  available_date: nil
)

user23_saturday = Unavailability.create!(
  official: user23,
  week_day: 6,
  all_day: false,
  time_from: '12:00:00',
  time_to: '15:00:00',
  available_date: nil
)

user23_sunday = Unavailability.create!(
  official: user23,
  week_day: 7,
  all_day: false,
  time_from: '14:00:00',
  time_to: '18:00:00',
  available_date: nil
)

(24..30).each do |user_id|
  (1..7).each do |week_day|
    Unavailability.create!(
      official: User.find_by(id: user_id),
      week_day: week_day,
      all_day: week_day.odd?,
      time_from: week_day.even? ? '09:00:00' : nil,
      time_to: week_day.even? ? '13:00:00' : nil,
      available_date: nil
    )
  end
end
puts 'Unavailabilities created'

# Assign Roles to Users
puts 'Creating User_Roles'
UserRole.create!(user: user1, role: admin)
UserRole.create!(user: user2, role: admin)
UserRole.create!(user: user3, role: admin)
UserRole.create!(user: test_user, role: admin)
UserRole.create!(user: user4, role: assigner)
UserRole.create!(user: user5, role: assigner)
UserRole.create!(user: user6, role: assigner)
UserRole.create!(user: user7, role: assigner)
UserRole.create!(user: user8, role: assigner)
UserRole.create!(user: user9, role: official)
UserRole.create!(user: user10, role: official)
UserRole.create!(user: user11, role: official)
UserRole.create!(user: user12, role: official)
UserRole.create!(user: user13, role: official)
UserRole.create!(user: user14, role: official)
UserRole.create!(user: user15, role: official)
UserRole.create!(user: user16, role: official)
UserRole.create!(user: user17, role: official)
UserRole.create!(user: user18, role: official)
UserRole.create!(user: user19, role: official)
UserRole.create!(user: user20, role: official)
UserRole.create!(user: user21, role: official)
UserRole.create!(user: user22, role: official)
UserRole.create!(user: user23, role: official)
UserRole.create!(user: user24, role: official)
UserRole.create!(user: user25, role: official)
UserRole.create!(user: user26, role: official)
UserRole.create!(user: user27, role: official)
UserRole.create!(user: user28, role: official)
UserRole.create!(user: user29, role: official)
UserRole.create!(user: user30, role: official)
puts 'User_Roles created'

# Create Permissions
puts 'Creating Permissions'

# Admin permissions (full CRUD access to roles)
puts 'Creating Admin permissions'
Permission.create!(role: admin, action_name: 'create assigner')
Permission.create!(role: admin, action_name: 'find assigner')
Permission.create!(role: admin, action_name: 'update assigner')
Permission.create!(role: admin, action_name: 'delete assigner')
Permission.create!(role: admin, action_name: 'create official')
Permission.create!(role: admin, action_name: 'find official')
Permission.create!(role: admin, action_name: 'update official')
Permission.create!(role: admin, action_name: 'delete official')
Permission.create!(role: admin, action_name: 'create game')
Permission.create!(role: admin, action_name: 'find game')
Permission.create!(role: admin, action_name: 'update game')
Permission.create!(role: admin, action_name: 'delete game')
puts 'Admin permissions created'

# Assigner permissions (full CRUD access to assignments, read-only for officials and games)
puts 'Creating Assigner permissions'
Permission.create!(role: assigner, action_name: 'create assignment')
Permission.create!(role: assigner, action_name: 'find assignment')
Permission.create!(role: assigner, action_name: 'update assignment')
Permission.create!(role: assigner, action_name: 'delete assignment')
Permission.create!(role: assigner, action_name: 'find official')
Permission.create!(role: assigner, action_name: 'find game')
puts 'Assigner permissions created'

# Official permissions (read-only access to assignments and games)
# Should officials have delete-rights to assignments? Or do they have to contact their assigner and request an update/deletion?
puts 'Creating Official permissions'
Permission.create!(role: official, action_name: 'find assignment')
Permission.create!(role: official, action_name: 'find game')
puts 'Official permissions created'
puts 'Permissions created'

# Create Games
puts 'Creating Games'
game1 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'The Diamond Sluggers',
  away_team: 'The Batting Bandits',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '4567 Birchwood Avenue',
  field: 'Main Field',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game2 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Base Hitters',
  away_team: 'Pitch Perfect',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '8903 Birchwood Parkway',
  field: 'Thunderstrike Field',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game3 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'The Swinging Squirrels',
  away_team: 'Fastballs & Fireballs',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '5432 Maple Street',
  field: 'Victory Park',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game4 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'The Diamond Dusters',
  away_team: 'Ballpark Bandits',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '2114 Oak Ridge Ave',
  field: 'Sunset Diamond',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game5 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Grand Slam Gurus',
  away_team: 'The Dugout Divas',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '3421 Pine Hill Road',
  field: 'Golden Glove Stadium',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game6 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Bunt Force Trauma',
  away_team: 'The Triple Threats',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '4567 Birchwood Avenue',
  field: 'Main Field',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game7 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Hit and Run Heroes',
  away_team: 'The Stolen Bases',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '8903 Birchwood Parkway',
  field: 'Thunderstrike Field',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game8 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Slide into Home',
  away_team: 'The Fast & The Furious',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '5432 Maple Street',
  field: 'Victory Park',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game9 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Catch Me If You Can',
  away_team: 'The Batting Angels',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '2114 Oak Ridge Ave',
  field: 'Sunset Diamond',
  officials_assigned: true,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game10 = Game.create!(
  user_association: association1,
  title: 'Week 1',
  home_team: 'Home Run Hustlers',
  away_team: 'The Softball Sharks',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '3421 Pine Hill Road',
  field: 'Golden Glove Stadium',
  officials_assigned: false,
  status: 'delayed',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game11 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Batting Bandits',
  away_team: 'Base Hitters',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '1256 Maple Hollow Road',
  field: 'Diamond Breeze Field',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game12 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'Pitch Perfect',
  away_team: 'The Diamond Sluggers',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '89 Sunrise Trail',
  field: 'Cedar Valley Park',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game13 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'Fastballs & Fireballs',
  away_team: 'The Diamond Dusters',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '432 Willow Bend Avenue',
  field: 'Summit Ridge Ballpark',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game14 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'Ballpark Bandits',
  away_team: 'The Swinging Squirrels',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '17 Birchwood Terrace',
  field: 'Sandlot Oasis Stadium',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game15 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Dugout Divas',
  away_team: 'Bunt Force Trauma',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '6789 Riverstone Parkway',
  field: 'Harborline Sports Complex',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game16 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Triple Threats',
  away_team: 'Grand Slam Gurus',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '302 Evergreen Lane',
  field: 'Ironwood Glades Field',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game17 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Stolen Bases',
  away_team: 'Slide into Home',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '901 Sand Dune Boulevard',
  field: 'Golden Horizon Grounds',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game18 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Fast & The Furious',
  away_team: 'Hit and Run Heroes',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '55 Crimson Creek Drive',
  field: 'Starview Sports Dome',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game19 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Batting Angels',
  away_team: 'Home Run Hustlers',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '212 Quarry Ridge Lane',
  field: 'Bluffside Diamond',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)

game20 = Game.create!(
  user_association: association1,
  title: 'Week 2',
  home_team: 'The Softball Sharks',
  away_team: 'Catch Me If You Can',
  date_time: rand(2.months.seconds.ago..2.months.seconds.from_now),
  location: '784 Golden Acres Way',
  field: 'Echo Ridge Softball Complex',
  officials_assigned: false,
  status: 'upcoming',
  game_type: 'regular season',
  created_at: rand(1.years).seconds.ago
)
puts 'Games created'

# Create Game Pay Rates
puts 'Creating Pay Rates'
rate1 = GamePayment.create!(
  game_type: 'regular season',
  pay_rate: 35
)
puts 'Pay Rates created'

# Create Assignments
puts 'Creating Assignments'
assignment1 = Assignment.create!(
  game: game1,
  official: user9,
  assigner: user4,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment2 = Assignment.create!(
  game: game1,
  official: user10,
  assigner: user4,
  position: 'base',
  game_payment: rate1,
  accepted: nil,
  created_at: rand(3.months).seconds.ago
)

assignment3 = Assignment.create!(
  game: game2,
  official: user11,
  assigner: user5,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment4 = Assignment.create!(
  game: game2,
  official: user12,
  assigner: user5,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment5 = Assignment.create!(
  game: game3,
  official: user13,
  assigner: user6,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment6 = Assignment.create!(
  game: game3,
  official: user14,
  assigner: user6,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment7 = Assignment.create!(
  game: game4,
  official: user15,
  assigner: user7,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment8 = Assignment.create!(
  game: game4,
  official: user16,
  assigner: user7,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment9 = Assignment.create!(
  game: game5,
  official: user17,
  assigner: user8,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment10 = Assignment.create!(
  game: game5,
  official: user18,
  assigner: user8,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment11 = Assignment.create!(
  game: game6,
  official: user19,
  assigner: user4,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment12 = Assignment.create!(
  game: game6,
  official: user20,
  assigner: user4,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment13 = Assignment.create!(
  game: game7,
  official: user21,
  assigner: user5,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment14 = Assignment.create!(
  game: game7,
  official: user22,
  assigner: user5,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment15 = Assignment.create!(
  game: game8,
  official: user23,
  assigner: user6,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment16 = Assignment.create!(
  game: game8,
  official: user24,
  assigner: user6,
  position: 'base',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

assignment17 = Assignment.create!(
  game: game9,
  official: user25,
  assigner: user7,
  position: 'plate',
  game_payment: rate1,
  created_at: rand(3.months).seconds.ago
)

#Create multiple assignments for user10 (Isabella Harris) for display testing
#20 games abailable
assignment18 = Assignment.create!(
  game: game2,
  official: user10,
  assigner: user4,
  position: 'evaluator',
  game_payment: rate1,
  accepted: nil,
  created_at: rand(rand(10.days).seconds.ago..Time.now)
)

assignment19 = Assignment.create!(
  game: game3,
  official: user10,
  assigner: user4,
  position: 'base',
  game_payment: rate1,
  accepted: true,
  created_at: rand(3.months).seconds.ago
)

assignment20 = Assignment.create!(
  game: game4,
  official: user10,
  assigner: user4,
  position: 'base',
  game_payment: rate1,
  accepted: nil,
  created_at: rand(3.months).seconds.ago
)

assignment21 = Assignment.create!(
  game: game5,
  official: user10,
  assigner: user4,
  position: 'plate',
  game_payment: rate1,
  accepted: nil,
  created_at: rand(3.months).seconds.ago
)

assignment22 = Assignment.create!(
  game: game6,
  official: user10,
  assigner: user4,
  position: 'base',
  game_payment: rate1,
  accepted: false,
  created_at: rand(3.months).seconds.ago
)

assignment23 = Assignment.create!(
  game: game7,
  official: user10,
  assigner: user4,
  position: 'plate',
  game_payment: rate1,
  accepted: true,
  created_at: rand(3.months).seconds.ago
)
puts 'Assignments Created'