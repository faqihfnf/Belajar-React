import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute top-2 right-2 bg-blue-600 p-2 text-slate-300 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <h1 className={`text-3xl font-bold mb-2 text-slate-600 ${isDarkMode && " text-slate-100"}`}>{title}</h1>
        <p className={`text-slate-500 font-medium mb-4 ${isDarkMode && "text-slate-100"}`}>Welcome Please Enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const { isDarkMode } = useContext(DarkMode);
  if (type === "login") {
    return (
      <p className={`text-slate-500 text-center my-2 ${isDarkMode && " text-slate-100"} `}>
        Don't have an account?{" "}
        <Link to="/register" className="text-red-400 hover:text-red-600">
          Register
        </Link>
      </p>
    );
  } else
    return (
      <p className={`text-slate-500 text-center my-2 ${isDarkMode && " text-slate-100"} `}>
        Already have an account?{" "}
        <Link to="/login" className="text-red-200 hover:text-red-600">
          Login
        </Link>
      </p>
    );
};

export default AuthLayout;
