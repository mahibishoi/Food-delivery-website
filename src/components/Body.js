import { useEffect, useState } from 'react';
import  {Link} from 'react-router-dom';
import RestaurantCard from './RestraurantCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utills/useOnlineStatus';


const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
 const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const[searchText,setsearchText]=useState([]);


  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    console.log(json);
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);

  };
const onlineStatus=useOnlineStatus();

if(onlineStatus===false)
 return( <h1>
  Looks like you are offline !! please check your connection;
  
</h1>
);


  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
 

  //contional Rendering
  return (
    listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) :

    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
<div className="filter">
        <div className='search'>
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
setsearchText(e.target.value);
          }}/>
          <button onClick={()=>{
            //filter the restraunt cards and update the ui
            //search text
            console.log(searchText);
           const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())===searchText);
           setFilteredRestaurant(filteredRestaurant);
           console.log(filteredRestaurant);
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
       <Link
        key={restaurant.info.id} 
        to={"/restaurants/"+restaurant.info.id}>   <RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;