import { Fragment } from "react";
function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //cities = [];
  /*
  if (cities.length === 0) {
    return (
      <>
        <h1>Cities</h1>
        <p>No city was found</p>
      </>
    );
  }
  */
  return (
    <>
      <h1>Cities</h1>
      <p>{cities.length === 0 && "No city was found"}</p>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
