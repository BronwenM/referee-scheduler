const exampleAssociation = {
  id: 1,
  name: 'Diamond Softball League',
  sport: 'Softball',
  created_at: "2024-11-25T21:16:57.678Z",
  updated_at: "2024-11-25T21:16:57.678Z",
  root_user_id: null
};

const exampleUser = {
  id: 1,
  user_association_id: 1,
  name: 'Jordan Matthews',
  username: 'jormat',
  email: 'jordan@matthews.com',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: '1234 Oakwood Drive',
  phone: '5551234567',
  payment_info: '',
  created_at: '2024-11-25T21:16:57.983Z',
  updated_at: '2024-11-25T21:16:57.983Z'
};

const exampleAdminRole = {
  id: 1,
  name: 'admin',
  description: 'Administrator role with full CRUD access',
  created_at: '2024-11-25T21:16:57.684Z',
  updated_at: '2024-11-25T21:16:57.684Z'
};

const exampleAssignerRole = {
  id: 2,
  name: 'assigner',
  description: 'Assigner with CRUD access to assignments',
  created_at: '2024-11-25T21:16:57.685Z',
  updated_at: '2024-11-25T21:16:57.685Z'
};

const exampleOfficialRole = {
  id: 3,
  name: 'official',
  description: 'Official with read-only access to assignments',
  created_at: '2024-11-25T21:16:57.687Z',
  updated_at: '2024-11-25T21:16:57.687Z'
};

const exampleUserRole = {
  id: 1,
  role_id: 1,
  user_id: 1,
  created_at: '2024-11-25T21:17:06.719Z',
  updated_at: '2024-11-25T21:17:06.719Z'
};

const examplePermissions = {
  id: 1,
  role_id: 1,
  action_name: 'create assigner',
  created_at: '2024-11-25T21:17:06.773Z',
  updated_at: '2024-11-25T21:17:06.773Z'
};

const exampleUnavailability1 = {
  id: 1,
  official_id: 9,
  week_day: 1,
  all_day: true, // unavailable all day
  time_from: null,
  time_to: null,
  available_date: null,
  created_at: '2024-11-25T21:17:06.414Z',
  updated_at: '2024-11-25T21:17:06.414Z'
};

const exampleUnavailability2 = {
  id: 2,
  official_id: 9,
  week_day: 2,
  all_day: false,
  time_from: '2000-01-01T09:00:00.000Z', // unavailable during a time range
  time_to: '2000-01-01T17:00:00.000Z',
  available_date: null,
  created_at: '2024-11-25T21:17:06.418Z',
  updated_at: '2024-11-25T21:17:06.418Z'
};

const examplePayRate = {
  id: 1,
  game_type: 'regular season',
  pay_rate: 1,
  created_at: '2024-11-25T21:17:06.840Z',
  updated_at: '2024-11-25T21:17:06.840Z'
};