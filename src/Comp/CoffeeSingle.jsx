import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeSingle = ({ coffee ,setCofffees,coffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
     
        // console.log(id+ " delete confirmed");
        fetch(`http://localhost:5100/coffee/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.deletedCount>0){
            Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        const remain = coffees.filter(info => info._id!== id);
        setCofffees(remain);
            }
        })
      }
    });
  };
  return (
    <div className="card card-side bg-base-300 shadow-3xl rounded-xl border-gray-700 border">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center gap-3 w-full">
        <div className="flex flex-col items-start">
          <h2 className="card-title">Name: {name}</h2>
          <p>Category: {category}</p>
          <p>Chef: {chef}</p>
        </div>
        <div className="join join-vertical rounded-3xl ">
          <button className="btn bg-green-500">See</button>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-600">
            delete
          </button>
          <Link to={`updateSingle/${_id}`} className="btn btn-accent">Update</Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeSingle;
