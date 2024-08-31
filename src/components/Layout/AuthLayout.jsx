import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-slate-300 font-medium mb-4">Welcome Please Enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-300 text-center my-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-red-200 hover:text-red-600">
          Register
        </Link>
      </p>
    );
  } else
    return (
      <p className="text-slate-300 text-center my-2">
        Already have an account?{" "}
        <Link to="/login" className="text-red-200 hover:text-red-600">
          Login
        </Link>
      </p>
    );
};

export default AuthLayout;
