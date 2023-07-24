import { useState } from "react";

// starShipsName,starShipsIndex,starShipsCrew
export default function StarShipCard({ starShips }) {
  const [key, setKey] = useState([]); //storing each starship keys
  const [value, setValue] = useState([]); //storing each starship values

  const starShipsKeys = Object.keys(starShips);

  const starShipValues = Object.values(starShips);

  const updateShip = () => {
    setKey(starShipsKeys);
    setValue(starShipValues);

  };

  return (
    <div className="buttons-container">
        <div className="vertical-center">
      <button type="button" key={starShips.crew} onClick={updateShip} className="button-51" role="button">
        {starShips.name}
      </button>
      </div>
        <div className="key-value-design">{key && value ? <div>
            <div>{
                key.map((item,idx) => {
                    return <div>{key[idx]} : {value[idx]}</div>
                })}</div>
        </div> : <h1>No hits yet</h1>}</div>

      <br></br>

    </div>
  );
}
