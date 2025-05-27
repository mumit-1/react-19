import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Comp/AddCoffee";
import Root from "./Comp/Root";
import UpdateSingle from "./Comp/UpdateSingle";
import SignUp from "./Comp/SignUp";
import SignIn from "./Comp/SignIn";
import Users from "./Comp/Users";


const Router =  
createBrowserRouter([  {
    
        path: "/",
        element: <App></App>,
        // errorElement:<Error></Error>,
        children:[
          {
            path: "/",
            element: <Root></Root>,
            loader:()=> fetch('http://localhost:5100/coffee')
          },
          {
            path: "/user",
            element: <Users></Users>,
            loader:()=> fetch('http://localhost:5100/user')
          },
          {
            path: "/addCoffee",
            element: <AddCoffee></AddCoffee>,
            
          },
          {
            path: "/signup",
            element: <SignUp></SignUp>,
            
          },
          {
            path: "/signin",
            element: <SignIn></SignIn>,
            
          },
          {
            path: "updateSingle/:id",
            element: <UpdateSingle></UpdateSingle>,
            loader: ({params})=>fetch(`http://localhost:5100/coffee/${params.id}`),
          },
        ]
        
}]);

export default Router;