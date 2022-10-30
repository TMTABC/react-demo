import React from "react";
import DisplayInfor from "./Disoplayinfor";
import UserInfor from "./Userinfor";
class Mycomponent extends React.Component {
  
    // --------   = (event) =>
    // handleClick (event) {
    //     console.log(">>click me my button");
       
        
    //     this.setState({
    //         name: "kssfsn",
    //         age: Math.floor((Math.random()*100)+1)
    //     })
    // }
 
    // JSX
    render() {
        const myInfor = ['a','b','c']
        return (
                < div >
            
                <UserInfor />
                <br/>  <br/>
                <DisplayInfor name='TMT' age={'123'} myInfor = {myInfor}></DisplayInfor>
                <hr />
                <DisplayInfor name ='KBT' age ='456'></DisplayInfor>
            </div>
        );
    }
}
export default Mycomponent;