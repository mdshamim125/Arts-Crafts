import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/Hooks";

const AddCraftItem = () => {
  const { user } = useAuth();
  // console.log(user.email, user.displayName);
  const handleAddCraftItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newItem = {
      image,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userName,
      userEmail,
    };

    console.log(newItem);

    fetch("http://localhost:5000/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "An error occurred while adding the craft item",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the craft item",
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
      <h2 className="text-3xl font-extrabold">Add Craft Item</h2>
      <form onSubmit={handleAddCraftItem}>
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
                className="input input-bordered w-full" required
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
              >
                <option value="">Select Stock Status</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                defaultValue={user.displayName}
                className="input input-bordered w-full" required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                defaultValue={user.email}
                className="input input-bordered w-full" required
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add" className="btn btn-block bg-accent" />
      </form>
    </div>
  );
};

export default AddCraftItem;
