import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Jordan 1 Low Mocha",
    price: 1000000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
    while a tonal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 2,
    name: "Jordan 1 Low Bred",
    price: 2000000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    onal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 3,
    name: "Jordan 1 Low Panda",
    price: 2500000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
     this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 4,
    name: "Jordan 1 Low x Dior",
    price: 100000000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
   ging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 5,
    name: "Jordan 1 Low OG Travis Scott",
    price: 20000000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
    back with an AJ1 inspired by MJ's most coveted rookie card. The GOAT's embroidered signature graces the outer heel,
    while a ng bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
  {
    id: 6,
    name: "Jordan 1 Low Union",
    price: 27000000,
    image: "/images/jordan-low.jpg",
    description: `Trade? Never. Trophy Room is 
   onal Trophy Room logo and polished Wings logo create the co-branded bliss. Premium materials and special 
    edition packaging bring this pair back to the '85 season, so we can all relive the unforgettable journey together. `,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    window.location.href = "/product";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {email}
        <Button variant="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 flex flex-col">
          <h1 className="text-2xl font-bold text-blue-700 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="font-bold">
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={handleCheckout} variant="bg-blue-700 mt-5">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
