import { useContext } from "react";
import { AuthProvider } from "../Provider/Provider";
import Swal from "sweetalert2";


const SignUp = () => {
    const {createUser} = useContext(AuthProvider);
    const handelSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.Email.value;
        const pass = e.target.Password.value;
        const name = e.target.Name.value;
        console.log("done u r ",email,pass);
        createUser(email,pass)
        .then(result=>{
          console.log(result.user,"from firebase");
          const creationTime = result.user.metadata.creationTime;
          const forServer = {name,email,creationTime}
          fetch("http://localhost:5100/user",{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(forServer)
          })
          .then(res=>res.json())
          .then(data=>{
            // 
            console.log(data , "from backend");
            if(data.insertedId){
              Swal.fire("User Created!");
            }
          })
        })
        .catch(error=>{
          console.log(error,"=>Error");
        })
    }
    return (
        <div>
            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handelSubmit} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="Email" />
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="Name" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;