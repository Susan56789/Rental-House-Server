function Settings() {
  let settings = [
    {
      id: Math.floor(Math.random() * 10001),
      name: "House Rental Management System",
      email: "info@yahoo.com",
      contact: "+254796456234",
      cover_image: "",
      about_content: "Management system ",
    },
  ];

  return settings;
}

module.exports = Settings;
