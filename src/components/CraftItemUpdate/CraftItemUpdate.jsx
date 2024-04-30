import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../../hooks/Hooks";
import Swal from "sweetalert2";
import { ScaleLoader } from "react-spinners";

const CraftItemUpdate = () => {
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [craft, setCraft] = useState();

  useEffect(() => {
    if (!user) return;

    fetch(`https://art-craft-server-zeta.vercel.app/craft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCraft(data);
      })
      .catch((error) => {
        console.error("Error fetching craft items:", error);
      });
  }, [user, id]);

  console.log(craft);

  useEffect(() => {
    if (!user) return;

    fetch(`https://art-craft-server-zeta.vercel.app/myCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching craft item:", error);
      });
  }, [user, id]);

  const handleUpdateCraftItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const updatedItem = {
      image: form.image.value,
      itemName: form.itemName.value,
      subcategoryName: form.subcategoryName.value,
      shortDescription: form.shortDescription.value,
      price: form.price.value,
      rating: form.rating.value,
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
    };

    console.log(updatedItem);

    fetch(`https://art-craft-server-zeta.vercel.app/myCraft/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while updating the craft item",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while updating the craft item",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
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

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Craft Item</h2>
      <form onSubmit={handleUpdateCraftItem}>
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-full"
                defaultValue={""}
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                className="input input-bordered w-full"
                defaultValue={craft.itemName}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategoryName"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
                defaultValue={craft.subcategoryName}
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <textarea
                name="shortDescription"
                placeholder="Short Description"
                className="input input-bordered w-full"
                defaultValue={craft.shortDescription}
                required
                rows="4"
              ></textarea>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
                defaultValue={craft.price}
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
                defaultValue={craft.rating}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <select
                name="customization"
                className="input input-bordered w-full"
                defaultValue={craft.customization}
                required
              >
                <option value="">Select Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                className="input input-bordered w-full"
                defaultValue={craft.processingTime}
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <select
                name="stockStatus"
                className="input input-bordered w-full"
                defaultValue={craft.stockStatus}
              >
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-accent"
        />
      </form>
    </div>
  );
};

export default CraftItemUpdate;
