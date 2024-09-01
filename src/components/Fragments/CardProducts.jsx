import { Link } from "react-router-dom";
import Button from "../Elements/Button/Index";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-xs bg-slate-700 border border-gray-900 rounded-md shadow mx-2 my-2 flex flex-col justify-between">{children}</div>;
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img src={image} alt="" className="rounded-t-lg p-4 h-60 w-full" />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="p-4 pb-4 h-full">
      <a href="">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{name.substring(0, 20)}...</h5>
        <p className="mb-3 text-m font-normal text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center px-5 pb-5">
      <span className="text-xl text-white font-bold">${price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</span>
      <Button color="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to Chart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
