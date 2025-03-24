import { Fragment } from "react";
function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No city was found</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <button
            className="list-group-item"
            key={city}
            onClick={() => console.log("Clicked")}
          >
            {city}
          </button>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
