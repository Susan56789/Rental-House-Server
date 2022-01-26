function Users() {
  let users = [
    {
      id: 1,
      name: "Administrator",
      username: "admin",
      email: "admin@yahoo.com",
      password: "admin123",
      isAdmin: true,
    },
    {
      id: 2,
      name: "Susan Wairimu",
      username: "suewairimu",
      email: "susanwairimu177@yahoo.com",
      password: "susan1234",
      isAdmin: false,
    },
    {
      id: 3,
      name: "Mary J",
      username: "maryy",
      email: "mary177@yahoo.com",
      password: "mary1234",
      isAdmin: false,
    },
  ];

  return users;
}

module.exports = Users;
