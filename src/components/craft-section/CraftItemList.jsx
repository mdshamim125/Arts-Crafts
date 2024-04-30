import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CraftItemList = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    fetch("https://art-craft-server-zeta.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, []);
  console.log(craftItems);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {" "}
        Craft items section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {craftItems.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.itemName}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-2 rounded-sm border">
              <h3 className="text-xl font-semibold mb-2">
                {item.subcategoryName}
              </h3>
              <p className="text-gray-600">{item.shortDescription}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-500">price: $ {item.price}</p>
                <p className="text-gray-500">rating: {item.rating}</p>
              </div>
              <div>
                <Link
                  to={`/craft/${item._id}`}
                  className="btn btn-primary mt-6"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItemList;
