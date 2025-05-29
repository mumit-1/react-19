import { useContext } from "react";
import{ AuthProvider } from "../Provider/Provider";
import Swal from "sweetalert2";


const SignIn = () => {
  const {signin} = useContext(AuthProvider);
  
  const handleSignIn = (e) =>{
    e.preventDefault();
    const email = e.target.Email.value;
    const pass = e.target.Password.value;
    signin(email,pass)
    .then(result=>{
      console.log(result.user);
      if(result.user?.providerId){
        Swal.fire("Logged in!");
      }
    })
    .catch(error=>{
      console.log(error,"this is the error");
    }) 
  }
    return (
        <div>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-300  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;