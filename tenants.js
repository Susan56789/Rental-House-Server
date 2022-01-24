function Tenants() {
  let tenants = [
    {
      id: 1,
      firstname: "Alex",
      middlename: "W",
      lastname: "Kimani",
      email: "AlexK@hotmail.com",
      contact: "0776453267",
      house_id: 1,
      status: true, //true if active, false if no longer a tenant
      date_in: new Date(2020, 07, 02),
    },
  ];

  return tenants;
}

module.exports = Tenants;
