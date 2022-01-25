function Tenants() {
  let tenants = [
    {
      id: 453566,
      firstname: "Alex",
      middlename: "W",
      lastname: "Kimani",
      email: "AlexK@hotmail.com",
      contact: "0776453267",
      house_id: 1,
      monthly_rate: 2500,
      outstanding_balance: 0,
      last_payment: new Date(2020, 08, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 07, 02, 13, 11, 47).toLocaleString() + "",
    },
    {
      id: 345693,
      firstname: "Jane",
      middlename: "M",
      lastname: "Mwanza",
      email: "JaneM@hotmail.com",
      contact: "07764535467",
      house_id: 14,
      monthly_rate: 7500,
      outstanding_balance: 0,
      last_payment: new Date(2020, 08, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 07, 02, 13, 11, 47).toLocaleString() + "",
    },
  ];

  return tenants;
}

module.exports = Tenants;
