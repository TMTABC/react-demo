import React, { useState } from "react";
import DisplayInfor from "./Disoplayinfor";
import AddUserInfor from "./AddUserinfor";

// class Mycomponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, name: 'TMT', age: '12' },
//             { id: 2,name :'KBT' ,age :'45' },
//             { id: 3, name: 'alsknacs', age: '18' }
//         ]
//     }
  
//     // --------   = (event) =>
//     // handleClick (event) {
//     //     console.log(">>click me my button");
       
        
//     //     this.setState({
//     //         name: "kssfsn",
//     //         age: Math.floor((Math.random()*100)+1)
//     //     })
//     // }
//     handleAddNewUser = (userObj) => {
        
//         this.setState({
//             listUser :[ userObj, ...this.state.listUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         // let listUsersClone = [...this.state.listUser]
//         let listUsersClone = this.state.listUser;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState ({
//             listUser: listUsersClone
//         })

//     }
//     // DRY:don't rêpat youseft
//     // JSX
//     render() {
        
//         return (
//             <>
                
//                 < div className="a" >
            
//                 <AddUserInfor
//                     handleAddNewUser = {this.handleAddNewUser}
                
//                 />
//                 <br/>  <br/>
//                 <DisplayInfor listUser={this.state.listUser}
//                     handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfor>
              
//                 </div>
//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }
const Mycomponent = (props) => {
    const [listUser, setlistuse] = useState(
        [
            
                { id: 1, name: 'TMT', age: '12' },
                { id: 2,name :'KBT' ,age :'45' },
                { id: 3, name: 'alsknacs', age: '18' }
            
        ]
    )
  const  handleAddNewUser = (userObj) => {
        setlistuse([ userObj, ...listUser])
                // this.setState({
                //     listUser :[ userObj, ...this.state.listUser]
                // })
            }
    const handleDeleteUser = (userId) => {
        // let listUsersClone = [...this.state.listUser]
        let listUsersClone = listUser;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistuse( listUsersClone )
        // this.setState ({
        //     listUser: listUsersClone
        // })
    
    }
     return (
            <>
                
                < div className="a" >
            
                <AddUserInfor
                    handleAddNewUser = {handleAddNewUser}
                
                />
                <br/>  <br/>
                <DisplayInfor listUser={listUser}
                    handleDeleteUser={handleDeleteUser}
                ></DisplayInfor>
              
                </div>
                <div className="b">

                </div>
            </>
        );
}
export default Mycomponent;