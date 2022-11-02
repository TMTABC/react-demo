import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';
// stateless vs statefull
// class DisplayInfor extends React.Component{
  

//         // babel
//         // this.state = {
//         //     isShowisUser : true
//         // }

    

//     // handlesShowHide = () => {
//     //     this.setState({
//     //         isShowisUser: !this.state.isShowisUser
//     //     }
//     //     )
//     // }
//     render() {
     
//         // console.log(this.props)
//         const { listUser } = this.props;
//         // console.log(listUser)
// // ..........props => properties
//         // console.table(listUser) giới thiệu
//         return (
//             <div className='display-infor-components'>
//                 {/* <img src = {logo}></img> */}
              
//                 {true &&
//                     <>
//                         {listUser.map((user) => {
                   
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
//                                     <div>
//                                     <div >My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() =>this.props.handleDeleteUser(user.id) }>Delete</button>
//                                     </div>

//                                     <hr />
//                                 </div>
//                             )

//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {
    const { listUser } = props;
    
                // console.log(this.props)
               
                // console.log(listUser)
        // ..........props => properties
                // console.table(listUser) giới thiệu
                return (
                    <div className='display-infor-components'>
                        {/* <img src = {logo}></img> */}
                      
                        {true &&
                            <>
                                {listUser.map((user) => {
                           
                                    return (
                                        <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                            <div>
                                            <div >My name's {user.name}</div>
                                            <div>My age's {user.age}</div>
                                            </div>
                                            <div>
                                                <button onClick={() =>props.handleDeleteUser(user.id) }>Delete</button>
                                            </div>
        
                                            <hr />
                                        </div>
                                    )
        
                                })}
                            </>
                        }
                    </div>
                )
            
}
export default DisplayInfor;