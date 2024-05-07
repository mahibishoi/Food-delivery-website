import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log(" parent Constructor")

    }
    componentDidMount(){
        console.log("Mount is called(parent)");
    }
    render(){
        console.log(" paren render");
        return(
            <div>
            <h1><b>About</b></h1>
    
       <UserClass name={"Mahendra ||Class"}
        Location={"Jodhpur (Raj)"}
       />
       
       
        </div>
        )
    }
}
/**
 - parent Constructor
/  paren render

Mahendra ||Classchild constructor
Mahendra ||Classchild render

Vikas ||Classchild constructor
Vikas ||Classchild render


    --DOM UPDATED -IN SINGLE BANTCH
Mahendra ||Class child Mount is called
Vikas ||Class child Mount is called

 Mount is called(parent)
 */
export default About;