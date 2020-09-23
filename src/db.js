// db.js

module.exports = {
  users: [
    {
      id: "ckf2aggbo000101ji0cs6hovq",
      name: "Producent A",
      role: "PRODUCER",
      mail: "madsmoeller1995@hotmail.com",
    },
    {
      id: "ckf2ahcl4000301jih9coc1if",
      name: "Producent B",
      role: "PRODUCER",
      mail: "cirk@hotmail.dk",
    },
    {
      id: "ckf2ahhsr000501jiexz4hfa9",
      name: "Producent C",
      role: "PRODUCER",
      mail: "hertil@mail.dk",
    },
    {
      id: "ckf2ahls0000701jick98er7i",
      name: "Producent D",
      role: "PRODUCER",
      mail: "mitte@hotmail.com",
    },
    {
      id: "ckf2ahphm000901ji4jdccjvu",
      name: "Kunde A",
      role: "CUSTOMER",
      mail: "hnv18@sol.dk",
    },
  ],
  products: [
    {
      id: "ckes849yz000101md82djen90",
      producer: "Producent A",
      title: "Gulerødder",
      type: "Vaskede",
      image: "https://raahandel.dk/wp-content/uploads/2019/09/DSC07878.jpg",
      category: "Frugt & Grønt",
      organic: true,
      cold: false,
      unit: "kg",
      unitSize: 1,
      bulkUnit: "Kasse",
      bulkSize: 10,
      price: 8.75,
      quantity: 100,
      descriptions: [
        {
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          goodBecause:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: "ckesaa4b9000101md3iam519p",
      producer: "Producent A",
      title: "Kartofler",
      type: "Nye kartofler",
      image:
        "https://raahandel.dk/wp-content/uploads/2019/11/IMG_20191112_112733.jpg",
      category: "Frugt & Grønt",
      organic: true,
      cold: false,
      unit: "kg",
      unitSize: 1,
      bulkUnit: "Kasse",
      bulkSize: 10,
      price: 12.0,
      quantity: 80,
      descriptions: [
        {
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          goodBecause:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: "ckesabws2000301md715i06wb",
      producer: "Producent B",
      title: "Pilsner",
      type: "Håndbrygget",
      image:
        "https://raahandel.dk/wp-content/uploads/2020/06/JPEG-Churchill.jpg",
      category: "Drikkevarer",
      organic: true,
      cold: false,
      unit: "l",
      unitSize: 0.8,
      bulkUnit: "Kasse",
      bulkSize: 12,
      price: 11.5,
      quantity: 75,
      descriptions: [
        {
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          goodBecause:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: "ckesaecrw000501md87nl9ax3",
      producer: "Producent C",
      title: "Æg",
      type: "Fritgående høns",
      image:
        "https://raahandel.dk/wp-content/uploads/2019/05/Billede-til-Ra%CC%8Ahandel.jpg",
      category: "Æg & Mejeri",
      organic: true,
      cold: true,
      unit: "stk",
      unitSize: 12,
      bulkUnit: "Kasse",
      bulkSize: 1,
      price: 16.0,
      quantity: 500,
      descriptions: [
        {
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          goodBecause:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      id: "ckesaisd0000701mda1t28it7",
      producer: "Producent D",
      title: "Frankfurter",
      type: null,
      image: "https://raahandel.dk/wp-content/uploads/2019/10/frankfurter.jpg",
      category: "Kød",
      organic: false,
      cold: true,
      unit: "g",
      unitSize: 400,
      bulkUnit: "Kasse",
      bulkSize: 14,
      price: 20.0,
      quantity: 35,
      descriptions: [
        {
          productDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          goodBecause:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ],
};
