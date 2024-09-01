import { useSelector } from "react-redux";
import { useLogin } from "../../hook/useLogin";
import Button from "../Elements/Button/Index";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
      {username}
      <Button color="bg-black ml-5 hover:bg-slate-700 text-white" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-lime-500 text-black p-2 rounded-md ml-5 mr-5">{totalCart}</div>
      <Button color="bg-black hover:bg-slate-700 text-slate-300" className=" px-10   rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀️" : "🌙"}
      </Button>
    </div>
  );
};

export default Navbar;
