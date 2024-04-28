import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hooks";

const CraftItemUpdate = ({item}) => {
    console.log(item);
  const { user } = useAuth();
  const { id } = useParams();
  const [craftItem, setCraftItem] = useState({
    image: "",
    itemName: "",
    subcategoryName: "",
    shortDescription: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
  });

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/myCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCraftItem(data);
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

    fetch(`http://localhost:5000/myCraft/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.updatedCount > 0) {
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

  if (!user) {
    return <div>Loading...</div>;
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
                defaultValue={craftItem.image}
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
                defaultValue={craftItem.itemName}
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
                defaultValue={craftItem.subcategoryName}
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
                defaultValue={craftItem.shortDescription}
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
                defaultValue={craftItem.price}
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
                defaultValue={craftItem.rating}
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
                defaultValue={craftItem.customization}
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
                defaultValue={craftItem.processingTime}
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
                defaultValue={craftItem.stockStatus}
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
