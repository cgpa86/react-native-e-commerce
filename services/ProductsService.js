const PRODUCTS = [
  {
    id: 1,
    name: "Pantimedia media Dior Monogram",
    price: 799,
    image: require("../assets/product_images/1.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
  {
    id: 2,
    name: "Diadema inspiracion VERSACE",
    price: 799,
    image: require("../assets/product_images/2.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
  {
    id: 3,
    name: "Diadema Christian Dior & Dior 2021",
    price: 799,
    image: require("../assets/product_images/3.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
  {
    id: 4,
    name: "Diadema ed. Fendi Roma Monogram",
    price: 979,
    image: require("../assets/product_images/4.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
  {
    id: 5,
    name: "  Diadema ed. strawberrys by Gucci",
    price: 799,
    image: require("../assets/product_images/5.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
  {
    id: 6,
    name: "  Diadema colaboración Disney para Gucci",
    price: 799,
    image: require("../assets/product_images/6.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 7,
    name: " set Dúo tipo perlas CDIOR gargantilla&brazalete",
    price: 1699,
    image: require("../assets/product_images/7.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 8,
    name: "Arete largo tipo perlas CD by Dior",
    price: 899,
    image: require("../assets/product_images/8.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 9,
    name: "  Broche tipo Camelia B&W Chanel",
    price: 999,
    image: require("../assets/product_images/9.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 10,
    name: " Pasador tipo Hair Brooch VERSACE medusa",
    price: 799,
    image: require("../assets/product_images/10.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 11,
    name: " Pasador tipo Hair Brooch Gucci GG",
    price: 899,
    image: require("../assets/product_images/11.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 12,
    name: "Broche de pelo tipo HairBrooch PRADA",
    price: 799,
    image: require("../assets/product_images/12.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 13,
    name: " Gargantilla choker Pulsera Been Gucci",
    price: 799,
    image: require("../assets/product_images/13.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 14,
    name: "Blusa sin mangas tipo Chanel logo B&W",
    price: 799,
    image: require("../assets/product_images/14.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 15,
    name: " Broche de pelo tipo HairBrooch PRADA",
    price: 799,
    image: require("../assets/product_images/15.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 16,
    name: "Broche de cabello tipo JADIOR CD",
    price: 699,
    image: require("../assets/product_images/16.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 17,
    name: "  Prendedor tipo Pin brooch la Cruz Chanel",
    price: 999,
    image: require("../assets/product_images/17.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },

  {
    id: 18,
    name: " Aretes tipo Arracada F por Fendi",
    price: 899,
    image: require("../assets/product_images/18.jpg"),
    description:
      " Sujetos a Disponibilidad. Precio más envio. Entrega Inmediata",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
