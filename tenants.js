function Tenants() {
  let tenants = [
    {
      id: 453566,
      firstname: "Alex",
      middlename: "W",
      lastname: "Kimani",
      email: "AlexK@hotmail.com",
      contact: "0776453267",
      house_id: 15,
      monthly_rate: 3000,
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
      invoice: 23545,
      payable_months: 6,
      paid_months: 4,
    },
    {
      id: 3455693,
      firstname: "John",
      middlename: "K",
      lastname: "Karina",
      email: "JohnK@Gmail.com",
      contact: "07224535467",
      house_id: 12,
      monthly_rate: 7500,
      last_payment: new Date(2020, 07, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 01, 02, 13, 11, 47).toLocaleString() + "",
      invoice: 23456,
      payable_months: 6,
      paid_months: 6,
    },
    {
      id: 345693,
      firstname: "Mary",
      middlename: "O",
      lastname: "Johnson",
      email: "MaryJ@gmail.com",
      contact: "07324535467",
      house_id: 13,
      monthly_rate: 5000,
      last_payment: new Date(2020, 11, 03, 11, 30, 40).toLocaleString() + "",
      date_in: new Date(2020, 08, 02, 13, 11, 47).toLocaleString() + "",
      invoice: 245335,
      payable_months: 3,
      paid_months: 3,
    },
  ];

  return tenants;
}

module.exports = Tenants;
