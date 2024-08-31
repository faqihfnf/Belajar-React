import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center flex-col min-h-screen ">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-slate-800 my-5">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500">{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
