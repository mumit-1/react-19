import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const data = useLoaderData();
    const [us,setUs] = useState(data);
    const handleDelete = (e) =>{
        fetch(`http://localhost:5100/user/${e}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(info=>{
            console.log(info);
        })
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