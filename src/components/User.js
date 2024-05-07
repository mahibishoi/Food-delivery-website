import { useEffect, useState } from "react";


const User=(props)=>{
    const[count]=useState(0);
    const[count2]=useState(9);
    useEffect(()=>{
        //API CALL
    },[]); 

    
    return(
     <div className="user-card">
 
        <h2>
Name:{props.name}
        </h2>
        <h3>
Location:Jodhpur
        </h3>
        <h4>
Contact:@Mahendra
        </h4>
    </div>
    );
};
export default User;
