import React from 'react'
import { iconUrlFromCode } from '../../../services/weatherServices';
import './Forecast.css'
const Forecast = ({title,items}) => {
  return (
    <div className="forecastContainer">
      <div className="forecastTitle">
        <h2>{title}</h2>
      </div>
      <div className="forecastDetailContainer">
        <div>
          {items.map((item)=> 
             (<div className="forecastDetail">
            <div className='forecastDetailCard'>
              <p className='forecastDeatailTitle'>{item.title}</p>
              <img src={iconUrlFromCode(item.icon)} alt="weather-detail-icon" />
              <p>{`${item.temp.toFixed()} °`}</p>
            </div>
          </div>))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Forecast;