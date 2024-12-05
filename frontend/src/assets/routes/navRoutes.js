export const links = [
  {
    id: 1,
    linkName: "Dashboard",
    linkTo: '/dashboard',
    visibleTo: ['admin', 'assigner', 'official']
  },
  {
    id: 2,
    linkName: "Availability",
    linkTo: '/availability',
    visibleTo: ['official']
  },
  {
    id: 3,
    linkName: "Calendar",
    linkTo: '/calendar',
    visibleTo: ['official']
  },
  {
    id: 4,
    linkName: "Profile",
    linkTo: '/profile',
    visibleTo: ['admin', 'assigner', 'official']
  },
  {
    id: 5,
    linkName: "Create Game",
    linkTo: '/new-game',
    visibleTo: ['admin']
  },
  {
    id: 6,
    linkName: "Create Assignment",
    linkTo: '/new-assignment',
    visibleTo: ['admin', 'assigner']
  },
  {
    id: 7,
    linkName: "View Reports",
    linkTo: '/reports',
    visibleTo: ['admin', 'assigner']
  },
  {
    id: 8,
    linkName: "Assignments",
    linkTo: '/assignments',
    visibleTo: ['official']
  },
  {
    id: 9,
    linkName: "Games",
    linkTo: '/games',
    visibleTo: ['assigner', 'admin']
  },
]