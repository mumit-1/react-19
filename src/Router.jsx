import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddCoffee from "./Comp/AddCoffee";
import Root from "./Comp/Root";


const Router =  
createBrowserRouter([  {
    
        path: "/",
        element: <App></App>,
        // errorElement:<Error></Error>,
        children:[
          {
            path: "/",
            element: <Root></Root>,
            
          },
          {
            path: "/addCoffee",
            element: <AddCoffee></AddCoffee>,
            
          },
        ]
        
}]);

export default Router;