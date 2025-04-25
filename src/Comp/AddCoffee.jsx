import React from 'react';

const AddCoffee = () => {
    
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-base-100 rounded-lg shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Add New Coffee</h2>
        <p className="text-center text-sm mb-8 text-base-content/70">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
            </div>

            {/* Chef */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full" />
            </div>

            {/* Supplier */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
            </div>

            {/* Taste */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
            </div>

            {/* Category */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
            </div>

            {/* Details */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
            </div>
          </div>

          {/* Photo URL */}
          <div className='flex flex-col'>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full" />
          </div>

          {/* Button */}
          <div className="text-center mt-6">
            <button type="submit" className="btn btn-primary w-full md:w-1/2">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
