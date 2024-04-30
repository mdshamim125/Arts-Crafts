import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../hooks/Hooks";

const ArtsAndCrafts = () => {
  const { loading } = useAuth();
  const [craftItems, setCraftItems] = useState([]);
  // const [artItems, setArtItems] = useState([]);

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

  // console.log(craftItems);
  
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">All Arts & Crafts</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Craft Name</th>
              <th>Subcategory Name</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {craftItems.map((item) => {
              console.log(item);
              return (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.itemName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.subcategoryName}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Link
                      to={`/craft/${item._id}`}
                      className="btn btn-primary btn-xs"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {/* <tbody>
            {artItems.map((item) => {
              console.log(item);
              return (
                <tr key={item.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.item_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.subcategory_Name}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Link
                      to={`/art/${item._id}`}
                      className="btn btn-primary btn-xs"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ArtsAndCrafts;
