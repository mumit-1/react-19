import React from 'react';

const AddCoffee = () => {
    const handleSubmit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
      const newData = {name,chef,supplier,taste,category,details,photo}; 
      console.log(newData);
    }
  return (
    <div className=" flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-black rounded-2xl shadow-lg p-8">
     
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Add New Coffee</h2>
        <p className="text-center text-sm mb-8 text-base-content/70">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
            </div>

            {/* Chef */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full" />
            </div>

            {/* Supplier */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
            </div>

            {/* Taste */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
            </div>

            {/* Category */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
            </div>

            {/* Details */}
            <div className='flex flex-col'>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
            </div>
          </div>

          {/* Photo URL */}
          <div className='flex flex-col'>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" />
          </div>

          {/* Button */}
          <div className="text-center pt-5">
            <button type="submit" className="btn btn-primary w-full md:w-1/2 rounded-xl">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
