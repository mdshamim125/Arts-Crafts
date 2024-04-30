import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const ArtItemDetails = () => {
  const { id } = useParams(); // Get the item ID from the URL params
  const [artItem, setArtItem] = useState(null);

  useEffect(() => {
    fetch(`https://art-craft-server-zeta.vercel.app/art/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtItem(data);
      })
      .catch((error) => {
        console.error("Error fetching art item details:", error);
      });
  }, [id]);

  
  // console.log(artItem);

  if (!artItem) {
    return (
      <ScaleLoader
        color="#36d7b7"
        height={100}
        width={49}
        className="text-center mt-10"
      />
    );
  }

  return (
    <div className="container mx-auto p-6 mt-16">
      <div className="">
        <div className="lg:flex justify-center gap-6">
          <div className="lg:w-3/4">
            <img
              src={artItem.image}
              alt={artItem.itemName}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{artItem.item_name}</h2>
            <h3 className="text-2xl font-bold mb-4">
              {artItem.subcategory_Name}
            </h3>
            <p className="text-gray-600 mb-4">{artItem.short_description}</p>
            <div className="mb-4">
              <span className="font-semibold">Price:</span>{" "}
              <span>{artItem.price}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Rating:</span>{" "}
              <span>{artItem.rating}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Customization:</span>{" "}
              <span>{artItem.customization}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Processing Time:</span>{" "}
              <span>{artItem.processing_time}</span>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Stock Status:</span>{" "}
              <span>{artItem.stockStatus}</span>
            </div>
            <div>
              <button className="btn btn-secondary mt-8">Order Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtItemDetails;
