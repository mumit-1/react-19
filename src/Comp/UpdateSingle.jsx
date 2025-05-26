import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateSingle = () => {
    const data = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo } = data;
      const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newData = { name, chef, supplier, taste, category, details, photo };
    console.log(newData);
    fetch(`http://localhost:5100/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "User Updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
    return (
          <div className=" flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-black rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Update Coffee : {name}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Chef */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>

            {/* Supplier */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>

            {/* Taste */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Button */}
          <div className="text-center pt-5">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-1/2 rounded-xl"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateSingle;