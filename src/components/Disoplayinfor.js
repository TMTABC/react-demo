import React from 'react';

class DisplayInfor extends React.Component{
    render() {
        // console.log(this.props)
        const { name, age } = this.props;
// ..........props => properties
        return (

            <div>
                 <div>My name {name}</div>
            <div>My age {age}</div>
           </div>
        )
    }
}

export default DisplayInfor;