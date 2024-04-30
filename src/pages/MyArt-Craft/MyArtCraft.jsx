import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/Hooks";
import Swal from "sweetalert2";
import { ScaleLoader } from "react-spinners";

const MyCraftItem = () => {
  const { user, loading } = useAuth();
  const [craftItems, setCraftItems] = useState([]);
  const [filterCustomization, setFilterCustomization] = useState("All");

  useEffect(() => {
    if (!user) return;

    fetch(`https://art-craft-server-zeta.vercel.app/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCraftItems(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-craft-server-zeta.vercel.app/myCraft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = craftItems.filter((cof) => cof._id !== _id);
              setCraftItems(remaining);
            }
          });
      }
    });
  };

  const handleFilterChange = (e) => {
    setFilterCustomization(e.target.value);
  };

  if (loading) {
    return (
      <ScaleLoader
        color="#36d7b7"
        height={100}
        width={49}
        className="text-center mt-10"
      />
    );
  }

  let filteredItems = craftItems;
  if (filterCustomization !== "All") {
    filteredItems = craftItems.filter(
      (item) => item.customization === filterCustomization
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold my-6 text-center">
        My Arts And Crafts
      </h2>
      <div className="mb-6 flex justify-center">
        <select
          value={filterCustomization}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Yes">Customization Yes</option>
          <option value="No">Customization No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.itemName}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.itemName}</h3>
              <p className="text-gray-600">Price: $ {item.price}</p>
              <p className="text-gray-600">Rating: {item.rating}</p>
              <p className="text-gray-600">
                Customization: {item.customization}
              </p>
              <p className="text-gray-600">Stock Status: {item.stockStatus}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/update/${item._id}`} className="btn btn-primary">
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCraftItem;
