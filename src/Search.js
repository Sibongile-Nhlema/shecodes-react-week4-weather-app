import React from "react";

function Search() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    displayCityName(cityName);
  };

  const displayCityName = (cityName) => {
    const cityDisplay = document.querySelector("#city-display");
    cityDisplay.textContent = cityName;
  };

  return (
    <form className="search-form container p-2" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <input
            id="city"
            name="city"
            type="search"
            placeholder="Enter a city.."
            autoFocus={true}
            autoComplete="off"
            className="form-control shadow-sm"
          />
        </div>
        <div className="col-4">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary shadow-sm"
          />
          <input
            type="submit"
            value="Current"
            id="current-location"
            className="btn btn-primary shadow-sm current"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
