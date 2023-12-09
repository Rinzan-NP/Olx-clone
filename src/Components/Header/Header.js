import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const firebase = useContext(FirebaseContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/");
  };
  const handleSell = () => {
    navigate('/create')
  }
  const handleLogin = () => {
    if (user) {
    }else{
      navigate('/login')
    }
  }
  const { user } = useContext(AuthContext);
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={handleLogin}>{user ? user.displayName : "Login"}</span>
          <hr />
        </div>
        {user && <span onClick={handleLogout}>Logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={handleSell}>
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
