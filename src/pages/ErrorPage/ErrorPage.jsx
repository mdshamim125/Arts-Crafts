import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-xl flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-7xl font-bold">Oops!!! </h1>
        <h2 className="text-3xl font bold my-4">something went wrong</h2>
        <Link to="/">
          <button className="btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
