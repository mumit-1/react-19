import { Link, useLoaderData } from "react-router-dom";
import CoffeeSingle from "./CoffeeSingle";
import { useState } from "react";


const Root = () => {
  const coffeeData = useLoaderData();
  const [coffees, setCofffees] = useState(coffeeData);
  return (
    <div>
     
    
      <div className="mt-7">
        <p>There is {coffeeData.length} coffee</p>
        <div className="grid grid-cols-2 gap-2 ">
          {coffees.map((coffee) => (
            <CoffeeSingle
              key={coffee._id}
              coffees={coffees}
              setCofffees={setCofffees}
              coffee={coffee}
            ></CoffeeSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Root;
