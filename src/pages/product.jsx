import React from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
    while a tonal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 2,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    onal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 3,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
     this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 4,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
   ging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 5,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
    while a ng bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 6,
    name: "Jordan 1 Low",
    price: "Rp. 1.000.000",
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
   onal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductPage = () => {
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
