import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import resJsonFile from "./resJsonFile.json"
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *  - Image
 *  - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo hover-pointer" src={logo} alt="" />
      </div>
      {/* <div className="nav-items"> */}
      <nav className="nav-items hover-pointer">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};


const RestaurantCard = (props) => {
  // console.log(props);
  const { resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime }  = resData?.data;
  return (
    <div className="res-card hover-pointer">
      <img
      className="res-logo"
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
      cloudinaryImageId}
      alt="Restaurant Logo"
      />
      <p id="name">{name}</p>

      <p>{cuisines.join(", ")}</p>
      <p>
        {avgRating}<span><img width="16" height="16" src="https://img.icons8.com/fluency/16/star.png" alt="star"/></span> 
      </p>

      <p>₹{costForTwo/100} for two </p>
      <p>{deliveryTime} minutes </p>
        {/* <span><img width="16" height="16" src="https://img.icons8.com/fluency/16/restaurant-.png" alt="restaurant-"/></span> 
        <span><img width="16" height="16" src="https://img.icons8.com/fluency/16/meal.png" alt="meal"/></span> 
        <span><img width="16" height="16" src="https://img.icons8.com/fluency/16/money.png" alt="money"/></span> 
        <span><img width="16" height="16" src="https://img.icons8.com/fluency/16/delivery-time.png" alt="delivery-time"/></span>  */}
    </div>
  );
};

const Body = () => {
  const resList = resJsonFile.swiggyData;

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {
        resList.map(restaurant => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
        ))
      }
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex-all-center">
      <p>Copyright &copy;</p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Hello = () => <h1 className="">Hello</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);