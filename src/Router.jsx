import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Comp/AddCoffee";


const Router =  
createBrowserRouter([  {
    
        path: "/",
        element: <App></App>,
        // errorElement:<Error></Error>,
        children:[
          {
            path: "/addCoffee",
            element: <AddCoffee></AddCoffee>,
            
          },
        ]
        
}]);

export default Router;