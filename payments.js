function Payments() {
  let payments = [
    {
      id: 1,
      tenant_id: 364678,
      outstanding_balance: 0,
      payable_months: 6,
      amount: 2500,
      invoice: Math.floor(Math.random() * 10000),
      date_created: new Date(2020, 10, 5, 11, 29, 35).toLocaleString() + "",
    },
    {
      id: 2,
      tenant_id: 345567,
      amount: 7500,
      invoice: Math.floor(Math.random() * 10000),
      date_created: new Date(2020, 10, 1, 11, 30, 45).toLocaleString() + "",
      outstanding_balance: 0,
      payable_months: 4,
    },
  ];

  return payments;
}

module.exports = Payments;
