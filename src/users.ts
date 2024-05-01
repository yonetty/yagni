type User = {
  id: number;
  userName: string;
  isAdmin: boolean;
};

const users: User[] = [
  {
    id: 1,
    userName: "Alice",
    isAdmin: true,
  },
  {
    id: 2,
    userName: "Bob",
    isAdmin: false,
  },
];

const guest: User = {
  id: 99,
  userName: "Guest",
  isAdmin: false,
};

const getUser = (id: number): User => users.find((u) => u.id === id) || guest;

export { User, getUser };
