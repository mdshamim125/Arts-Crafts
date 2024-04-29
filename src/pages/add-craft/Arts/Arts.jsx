import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Arts = () => {
  const [craftItems, setCraftItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/art")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold my-6 text-center">
        Art & Craft Categories Section
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
                {item.subcategory_Name}
              </h3>
              <p className="text-gray-600">{item.short_description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-gray-500">price: $ {item.price}</p>
                <p className="text-gray-500">rating: {item.rating}</p>
              </div>
              <div>
                <Link
                  to={`/art/${item._id}`}
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

export default Arts;
