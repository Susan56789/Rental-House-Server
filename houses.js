function Houses() {
  let houses = [
    {
      id: Math.floor(Math.random() * 1001),
      house_no: 623,
      house_type: "Bedsitter",
      description: "Sample",
      price: 7500,
    },
    {
      id: Math.floor(Math.random() * 1001),
      house_type: "One Bedroom",
      house_no: 630,
      description: "Sample",
      price: 13000,
    },
  ];

  return houses;
}

module.exports = Houses;
