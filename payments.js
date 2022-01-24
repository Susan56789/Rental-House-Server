function Payments() {
  let payments = [
    {
      id: 1,
      "tenant-id": 2,
      amount: 2500,
      invoice: 123456,
      date_created: new Date(2020, 10, 5, 11, 29, 35),
    },
    {
      id: 2,
      "tenant-id": 1,
      amount: 7500,
      invoice: 136654,
      date_created: new Date(2020, 10, 1, 11, 30, 45),
    },
  ];

  return payments;
}

module.exports = Payments;
