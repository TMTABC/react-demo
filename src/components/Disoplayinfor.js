import React from 'react';

class DisplayInfor extends React.Component{
    render() {
        // console.log(this.props)
        const { listUser} = this.props;
// ..........props => properties
        
        return (

            <div>
                {listUser.map((user) => {
                   
                    return (
                        <div key={user.id}>
                            <div>My name's { user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr/>
                        </div>
                    )

                })}
                {/* <div>My name {name}</div>
                <div>My age {age}</div>
                <hr></hr>
                <div>My name {name}</div>
                <div>My age {age}</div>
                <hr />
                <div>My name {name}</div>
                <div>My age {age}</div> */}
           </div>
        )
    }
}

export default DisplayInfor;