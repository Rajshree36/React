import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () =>{
const [listofRestaurant,setListofRestaurent]=useState(resList);

    return (
 <div className="body">
    <div className="filter">
        <button className="filter-btn" onClick={()=> {
            const filteredRes=listofRestaurant.filter((res)=> res.data.avgRating > 4
            );
            setListofRestaurent(filteredRes);
        }}>Top Rated Restaurant</button>
    </div>
    <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
    </div>
 </div>
    );
}

export default Body;