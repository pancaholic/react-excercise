import React from "react";
import Button from "../Elements/Button";

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#" alt="product">
      <img src={image} alt="" className="p-3 rounded-t-2xl h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-8 h-full">
      <a href="#">
        <h5 className="text-xl font-bold tracking-tight text-yellow-300">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-white text-justify">{children.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  let usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return (
    <div className="flex justify-between items-center px-8 pb-8 md:px-3">
      <span className="text-white text-xl font-bold">{usd.format(price)}</span>
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
