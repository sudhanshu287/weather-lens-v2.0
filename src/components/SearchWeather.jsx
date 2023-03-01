import React from 'react';
import { useState } from 'react';
import './SearchWeather.css';
import { toast } from "react-toastify";
const SearchWeather = ({ setQuery, units, setUnits }) => {


    const [city, setCity] = useState("");

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };
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
        <div className=" searchContainer">
            <div className="searchInput">
                <input type="text" placeholder='Search for City. . .' value={city}
          onChange={(e) => setCity(e.currentTarget.value)} required onKeyDown={(e)=>{
            if(e.key==='Enter'){
                handleSearchClick();
            }
          }
            
          }/>

            </div>
            <div className="searchButtons">
                <div className='searchAndLocationButton'>
                    <button className='search-btn' onClick={handleSearchClick}>
                        <i className="ri-search-line"></i>
                    </button>
                    <button className='search-btn' onClick={handleLocationClick}>
                        <i className="ri-map-pin-line"></i>
                    </button>
                </div>
                <div className="unitConvertButton">
                    <div class="switches-container">
                        <input type="radio" id="C" name="switchPlan" value="C" checked="checked"  />
                        <input type="radio" id="F" name="switchPlan" value="F"  />
                        <label for="C">°C</label>
                        <label for="F">°F</label>
                        <div class="switch-wrapper">
                            <div class="switch">
                                <div >
                                    <button name="metric" onClick={handleUnitsChange}>
                                    °C
                                    </button>
                                </div>
                                <div >
                                    <button name="imperial" onClick={handleUnitsChange}>
                                    °F
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SearchWeather