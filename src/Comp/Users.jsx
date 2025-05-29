import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const data = useLoaderData();
    const [us,setUs] = useState(data); // us = user 
    const handleDelete = (e) =>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5100/user/${e}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(info=>{
          const remain = us.filter(infos=>infos._id!==e)
          setUs(remain);
            console.log(info);
        })
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
        
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>email</th>
        <th>time</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
 
      {
        us.map(a=>
                <tr key={a._id}>
        <th>{a.name}</th>
        <td>{a.email}</td>
        <td>{a.creationTime}</td>
        <td>
            <button className='btn'>E</button>
            <button onClick={()=>handleDelete(a._id)} className='btn'>X</button>
            <button></button>
        </td>
      </tr>
        )
      }
  
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;