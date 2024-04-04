import React from "react";
import Button from "../Elements/Button";

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#" alt="product">
      <img src={image} alt="" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-8 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-white text-justify">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  let idr = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return (
    <div className="flex justify-between items-center px-8 pb-8 md:px-3">
      <span className="text-white text-xl font-bold">{idr.format(price)}</span>
      <Button variant="bg-yellow-500" onClick={() => addToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="mx-2 mt-2 mb-5 w-full max-w-xs bg-slate-700 border rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
