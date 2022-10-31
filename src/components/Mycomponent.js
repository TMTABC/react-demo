import React from "react";
import DisplayInfor from "./Disoplayinfor";
import UserInfor from "./Userinfor";
class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'TMT', age: '12' },
            { id: 2,name :'KBT' ,age :'45' },
            { id: 3, name: 'alsknacs', age: '18' }
        ]
    }
  
    // --------   = (event) =>
    // handleClick (event) {
    //     console.log(">>click me my button");
       
        
    //     this.setState({
    //         name: "kssfsn",
    //         age: Math.floor((Math.random()*100)+1)
    //     })
    // }

    // DRY:don't rêpat youseft
    // JSX
    render() {
        
        return (
                < div >
            
                <UserInfor />
                <br/>  <br/>
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
              
            </div>
        );
    }
}
export default Mycomponent;