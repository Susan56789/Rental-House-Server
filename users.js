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
  ];

  return users;
}

module.exports = Users;
