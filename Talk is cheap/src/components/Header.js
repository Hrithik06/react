
import logo from "../../pngegg (2).png";

export const Header = () => {
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

export default Header;