import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card hover-pointer">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <p id="name">{name}</p>
      <p>{cuisines.join(", ")}</p>
      {/* <p id={"rating"}>{avgRating} stars</p> */}
      <p>
        <span>
          <img
            width="16"
            height="16"
            src="https://img.icons8.com/fluency/16/star.png"
            alt="star"
          />
        </span>{" "}
        {avgRating}
      </p>
      <p>₹{costForTwo / 100} for two </p>
      <p>{deliveryTime} minutes</p>
      {/* <span><img width="16" height="16" src="https://img.icons8.com/fluency/16/restaurant-.png" alt="restaurant-"/></span>
<span><img width="16" height="16" src="https://img.icons8.com/fluency/16/meal.png" alt="meal"/></span>
<span><img width="16" height="16" src="https://img.icons8.com/fluency/16/money.png" alt="money"/></span>
<img width="16" height="16" src="https://img.icons8.com/fluency/16/delivery-time.png" alt="delivery-time"/> */}
    </div>
  );
};
export default RestaurantCard;
