function Users() {
  let users = [
    {
      id: 1,
      name: "Administrator",
      username: "admin",
      email: "admin@yahoo.com",
      password: "admin123",
      token: Math.floor(Math.random() * 1000),
    },
  ];

  return users;
}

module.exports = Users;
