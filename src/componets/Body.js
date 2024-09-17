import React, { useState } from 'react'
import RestroCard from './RestroCard';
import { resData } from '../utils/MockData';


const Body = () => {
  const [data,setData]=useState(resData || [])

  const [filterFlag,setFliterFlag] = useState(false)

  const FilterTopRestro = ()=>{
    const updatedData = resData.filter((ele)=>ele?.info?.avgRating>=4.3)
    setFliterFlag((ele)=>!ele)
    filterFlag ? setData(resData) :  setData(updatedData)
  }
    return (
        <div className="body">
          <div className="filter-search-container">
          <div className="search-container">
          <input type="text" />
          <button>search</button>
          </div>
            <div className="filter-container">
              <button className='filter-tbn' onClick={FilterTopRestro}>{filterFlag?"Reset Filter" : "Top Restorent Filter"}</button>
            </div>
          </div>
          <div className="res-container">
            {data?.map((restro) => (
              <RestroCard key={restro?.info?.id} restro={restro} />
            ))}
          </div>
        </div>
      );
}

export default Body