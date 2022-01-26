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
      last_payment: new Date(2020, 08, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 07, 02, 13, 11, 47).toLocaleString() + "",
      invoice: 23435,
      payable_months: 6,
      paid_months: 4,
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
      last_payment: new Date(2020, 08, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 07, 02, 13, 11, 47).toLocaleString() + "",
      invoice: 23435,
      payable_months: 6,
      paid_months: 4,
    },
  ];

  return tenants;
}

module.exports = Tenants;
