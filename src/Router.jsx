import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Comp/AddCoffee";
import Root from "./Comp/Root";
import UpdateSingle from "./Comp/UpdateSingle";


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
            path: "/addCoffee",
            element: <AddCoffee></AddCoffee>,
            
          },
          {
            path: "updateSingle/:id",
            element: <UpdateSingle></UpdateSingle>,
            loader: ({params})=>fetch(`http://localhost:5100/coffee/${params.id}`),
          },
        ]
        
}]);

export default Router;