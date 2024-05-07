import { CDN_URL } from "../utills/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return (
        <div
            className="res-card"
            
        >
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo } FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;