import { useState } from "react";
import StarShipCard from "./StarShipCard";

export default function GetAllStarships() {
  const [starShips, setStarShips] = useState(null);

  //get all starships
  const getStarShips = async () => {
    console.log("in method getstarships...");
    const response = await fetch("https://swapi.dev/api/starships/");

    const data = await response.json();

    setStarShips(data);
  };

  const checkIfExist = () => {
    if (starShips === null) {
      getStarShips();
    }
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className="all-starships">
      <h1>Initiating starships</h1>
      <button className="refresh-button" onClick={refreshPage}>Refresh page</button>

        {starShips ? starShips.results.map((item,idx) => {
          return <StarShipCard key={idx} starShips={item} />
        }) : checkIfExist()}

    </div>
  );
}
