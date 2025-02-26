import { useState, useEffect } from "react";

import Meal from "./MealItem.jsx";

// don't try to convert component function as async.(not supported by react)
export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  // fatching a data once.
  useEffect(() => {
    async function fetchMeals() {
      // default get method execute, no need to mention method.
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      console.log(meals);

      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  // fetchMeals();   // call outSide useEffect()-it prevents infinite loop

  // if any error in backend API.
  // if (loadedMeals.message === "Not found") {
  //   return (
  //     <div id="meals">
  //       <p>Data fatching...</p>
  //     </div>
  //   );
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>
          <Meal meal={meal}></Meal>
        </li>
      ))}
    </ul>
  );
}
