import React from 'react'
import './SecondaryWeatherDetail.css';
import { formatToLocalTime } from '../services/weatherServices';

const SecondaryWeatherDetail = ({
    weather: {
      details,
      icon,
      temp,
      temp_min,
      temp_max,
      sunrise,
      sunset,
      speed,
      feels_like,
      humidity,
      timezone,
    },
  }) => {
  return (
    <div className=" secondaryDetail">
                    <div className="windDetail smallDetail">
                        <div className='detailIcon'>
                        <i class="ri-windy-line"></i>
                        </div>
                        <div>
                            <p>Wind Speed</p>
                            <h3>{`${speed.toFixed()} Km/H`}</h3>
                        </div>
                    </div>
                    <div className="humidityDetail smallDetail">
                        <div className='detailIcon'>
                        <i class="ri-drop-line"></i>
                        </div>
                        <div>
                            <p>Humidity</p>
                            <h3>{`${humidity.toFixed()} %`}</h3>
                        </div>
                    </div>
                    <div className="sunRiseDetail smallDetail">
                        <div className='detailIcon'><i class="ri-sun-line"></i></div>
                        <div>
                            <p>Sun Rise</p>
                            <h3>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</h3>
                        </div>
                    </div>
                    
                    <div className="highTempDetail smallDetail">
                        <div className='detailIcon'><i class="ri-arrow-up-line"></i></div>
                        <div>
                            <p>High</p>
                            <h3>{`${temp_max.toFixed()} °`}</h3>
                        </div>
                    </div>
                    <div className="lowTempDetail smallDetail">
                        <div className='detailIcon'><i class="ri-arrow-down-line"></i></div>
                        <div>
                            <p>Low</p>
                            <h3>{`${temp_min.toFixed()} °`}</h3>
                        </div>
                    </div>
                    <div className="sunSetDetail smallDetail">
                        <div className='detailIcon'><i class="ri-sun-line"></i></div>
                        <div><p>Sun Set</p>
                        <h3>{formatToLocalTime(sunset, timezone, "hh:mm a")}</h3></div>
                    </div>
            </div>
  )
}

export default SecondaryWeatherDetail