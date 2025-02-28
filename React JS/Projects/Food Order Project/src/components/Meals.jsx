import { useState, useEffect } from "react";

import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";
import useHttp from "../hooks/useHttp.js";

const requestConfig = {};

// don't try to convert component function as async.(not supported by react)
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return (
      <Error
        className="center"
        title="Failed to fatch meals.."
        message={error}
      />
    );
  }

  // if (!data) {
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal}></MealItem>
      ))}
    </ul>
  );
}

/*

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


*/
