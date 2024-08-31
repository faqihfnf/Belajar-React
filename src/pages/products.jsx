import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProducts";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hook/useLogin";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     price: 1500000,
//     image: "/public/images/shoes.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   },
//   {
//     id: 2,
//     name: "Shoes New",
//     price: 2500000,
//     image: "/public/images/Shoes-2.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   },
//   {
//     id: 3,
//     name: "Shoes Like New",
//     price: 3500000,
//     image: "/public/images/Shoes-3.jpg",
//     description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//   },
// ];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  //* useReff
  // const cartRef = useRef([{ id: 1, qty: 1 }]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {username}
        <Button color="bg-black ml-5 hover:bg-blue-700 text-white" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-2">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="table-auto text-left border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}</td>
                      <td>$ {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                      <td>{item.qty}</td>
                      <td>$ {(product.price * item.qty).toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  {" "}
                  <b> $ {totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
