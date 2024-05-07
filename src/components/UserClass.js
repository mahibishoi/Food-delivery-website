import React from "react";
class UserClass extends React.Component{
constructor(props){
    super(props);
    //state variable
this.state={
        userInfo:{
                name:"Dummy",
                Location:"XYZ",
 }};
}
//API called
async componentDidMount(){
     const data=await fetch("https://api.github.com/users/mahibishoi");
const json= await data.json();
console.log(json);
//state variable update kar liya
this.setState({
        userInfo:json,

})
}
componentDidUpdate(){
        console.log("Update");

}
componentWillUnmount(){
        console.log("Unmount happening")
}
render(){
   const{name,location,twitter_username, avatar_url}=this.state.userInfo
    return(
        <div className="user-card">
        <img src={ avatar_url}/>
           <h2>
   Name:{name} 
           </h2>
           <h3>
   Location:{location}
           </h3>
           <h4>
   Contact:{"@"+twitter_username}
           </h4>
           </div>
       );
}
 }
export default UserClass;