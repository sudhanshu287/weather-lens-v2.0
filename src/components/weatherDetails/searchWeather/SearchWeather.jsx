import React from "react";
import { useState } from "react";
import "./SearchWeather.css";
import { toast } from "react-toastify";
const SearchWeather = ({ setQuery,  setUnits }) => {
  const [city, setCity] = useState("");
const [celciousTab,setCelciousTab]=useState(true);
const [kelvinTab,setKelvinTab]=useState(false);

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="searchContainer">
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search for City. . ."
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          required
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
      </div>
      <div className="searchButtons">
        <div className="searchAndLocationButton">
          <button className="search-btn" onClick={handleSearchClick}>
            <i className="ri-search-line"></i>
          </button>
          <button className="search-btn" onClick={handleLocationClick}>
            <i className="ri-map-pin-line"></i>
          </button>
        </div>
        <div className="unitConvertButton">
          <div className="slideButtons">
            <div className={`celcious ${celciousTab===true? "slideButtonActive":""}`} onClick={()=>{setUnits("metric");setCelciousTab(true);setKelvinTab(false);}}>
              °C
            </div>
            <div className={`kelvin ${kelvinTab===true? "slideButtonActive":""}`} onClick={()=>{setUnits("imperial");setKelvinTab(true);setCelciousTab(false);}}>
              °F
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
