
import { Outlet } from "react-router-dom";
import Navbar from "./../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const Root = () => {
  return (
    <div>
      <div className="max-w-6xl  md:mx-auto mx-6">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
