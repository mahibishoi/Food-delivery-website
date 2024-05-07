
import React, { lazy,Suspense } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
//import Grocery from "./components/Grocery.js";

//Chunking 
//Code Splitting
//Dynamic Bunding
//lazy Loading/ --on dimand loading

 const Grocery=lazy(()=>import("./components/Grocery.js"));



const AppLayout=()=>{
   return(
      <div className="app">
        <Header/>
     <Outlet/>
      </div>
   )
};
const appRouter=createBrowserRouter([
   {
      path: "/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
  
         {
            path: "/about",
            element:<About/>,
      
         },

         {
            path:"/contact",
            element:<Contact/>,
          
         },

         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,
         }

      ],
      errorElement:<Error/>,
   },
   {
      path: "/about",
      element:<About/>,

   },
   {
      path:"/Contact",
      element:<Contact/>,
    
   },
   {
path:"/Grocery",
element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
   },

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
