import  {LOGO_URL}  from "../utills/contants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
const Header=()=>{
  
   const[btnNamereact,setbtnNamereact]=useState("Login");
   const onlineStatus=useOnlineStatus();
   useEffect(()=>{
      console.log("use effect called");
   },[btnNamereact]);
    return (
       <div className="header">
 
       <div className="logo-container">
       <img className="logo" src={LOGO_URL} />
       </div>
       <div className="nav-items fl">
          <ul>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
          online Status:{onlineStatus ?"✅":"❌"}
          </li>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
           <Link to="/about">About Us</Link>
           </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className="login" 
            onClick={()=>{
         btnNamereact==="Login"?setbtnNamereact("Logout"):setbtnNamereact("Login");
            }}>{btnNamereact}</button>
 
          </ul>
       </div>
 
       </div>
    )
  };
  export default Header;
