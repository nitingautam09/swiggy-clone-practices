import React from 'react'
import { CDN_URL } from '../utils/Constants';

const RestroCard= ({ restro }) => {
    const { name, cuisines, avgRating, slaString, cloudinaryImageId } = restro?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_URL+cloudinaryImageId
          }

          alt="res banner"
        />
        <h4> {name} </h4>
        <div className="cousine-list">
          {cuisines &&
            cuisines?.map((ele, index) => (
              <p key={`${ele}-${index}`}>
                {ele}
                {cuisines.length > 1 ? "," : ""}
              </p>
            ))}
        </div>
  
        <h4> {avgRating} Rating</h4>
        <h4> {slaString} </h4>
      </div>
    );
}

export default RestroCard