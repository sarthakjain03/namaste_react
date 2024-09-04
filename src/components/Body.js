import RestaurantCard from "./RestaurantCard";
import resObjs from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [resList, setResList] = useState(resObjs);

    return (
        <div className='body'>
            {/* <div className='search'>Search</div> */}
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        setResList(resObjs.filter(res => res.info.avgRating >= 4.4));
                    }}
                >Top Rated</button>
            </div>
            <div className='res-container'>
                {resList?.map((res => (
                    <RestaurantCard key={res?.info?.id} resData={res} />
                )))}
            </div>
        </div>
    );
}

export default Body;