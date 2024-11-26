const exampleAssociation = {
  id: 1,
  name: 'Diamond Softball League',
  sport: 'Softball',
  created_at: "2024-11-25T21:16:57.678Z",
  updated_at: "2024-11-25T21:16:57.678Z",
  root_user_id: null
};

const user1 = {
  id: 1,
  user_association_id: 1,
  role: "official",
  name: 'Jordan Matthews',
  username: 'jormat',
  email: 'jordan@matthews.com',
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: '1234 Oakwood Drive',
  phone: '5551234567'
};

const user2 = {
  id: 2,
  user_association_id: 1,
  role: "official",
  name: 'Jordan Matthews',
  username: 'jormat',
  email: 'jordan@matthews.com',
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: '1234 Oakwood Drive',
  phone: '5551234567'
};

const user3 = {
  id: 3,
  user_association_id: 1,
  role: "official",
  name: "Alice Johnson",
  username: "alicej",
  email: "alice.johnson@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "123 Maple St, Springfield, IL, 62701",
  phone: "555-123-4567"
};

const user4 = {
  id: 4,
  user_association_id: 1,
  role: "official",
  name: "Bob Smith",
  username: "bobsmith",
  email: "bob.smith@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "456 Oak St, Rivertown, TX, 75001",
  phone: "555-234-5678"
}

const user5 = {
  id: 5,
  user_association_id: 1,
  role: "official",
  name: "Charlie Davis",
  username: "charlied",
  email: "charlie.davis@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "789 Pine St, Greenfield, CA, 92003",
  phone: "555-345-6789"
}

const user6 = {
  id: 6,
  user_association_id: 1,
  role: "official",
  name: "Diana Lee",
  username: "dianalee",
  email: "diana.lee@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "101 Birch Ave, Lakewood, CO, 80012",
  phone: "555-456-7890"
}

const user7 = {
  id: 7,
  user_association_id: 1,
  role: "official",
  name: "Ethan Green",
  username: "ethangreen",
  email: "ethan.green@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "202 Cedar Ln, Hilltop, NY, 10001",
  phone: "555-567-8901"
}

const user8 = {
  id: 8,
  user_association_id: 1,
  role: "official",
  name: "Fiona Harris",
  username: "fionaharris",
  email: "fiona.harris@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "303 Elm St, Brookside, NJ, 07001",
  phone: "555-678-9012"
}

const user9 = {
  id: 9,
  user_association_id: 1,
  role: "official",
  name: "George Taylor",
  username: "georgetaylor",
  email: "george.taylor@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "404 Redwood Rd, Seaside, FL, 33101",
  phone: "555-789-0123"
}

const user10 = {
  id: 10,
  user_association_id: 1,
  role: "official",
  name: "Hannah Walker",
  username: "hannahw",
  email: "hannah.walker@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "505 Willow Dr, Meadowbrook, GA, 30301",
  phone: "555-890-1234"
}

const adminUser = {
  id: 11,
  user_association_id: 1,
  role: "admin",
  name: "Ian King",
  username: "ianking",
  email: "ian.king@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "606 Ash Ln, Pineville, OH, 45001",
  phone: "555-901-2345"
}

const assignerUser = {
  id: 12,
  user_association_id: 1,
  role: "assigner",
  name: "Jasmine Scott",
  username: "jasmines",
  email: "jasmine.scott@example.com",
  password: 'test',
  password_digest: '$2a$12$MIogc9U8k5sBpxHO5S/IyuX1XtnR3JTFQcfWWgzvBEjZ0nNNeID7m',
  address: "707 Maple Ave, Sunnydale, CA, 95001",
  phone: "555-012-3456"
}

const users = [
  {
    ...user1,
    unavailableTimes: [
      
    ]
  },
  {
    ...user2,
    unavailableTimes: [
      
    ]
  },
  {
    ...user3,
    unavailableTimes: [
      
    ]
  },
  {
    ...user4,
    unavailableTimes: [
      
    ]
  },
  {
    ...user5,
    unavailableTimes: [
      
    ]
  },
  {
    ...user6,
    unavailableTimes: [
      
    ]
  },
  {
    ...user7,
    unavailableTimes: [
      
    ]
  },
  {
    ...user8,
    unavailableTimes: [
      
    ]
  },
  {
    ...user9,
    unavailableTimes: [
      
    ]
  },
  {
    ...user10,
    unavailableTimes: [
      
    ]
  },
  {
    ...adminUser,
    unavailableTimes: [
      
    ]
  },
  {
    ...assignerUser,
    unavailableTimes: [
      
    ]
  },
];

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
