import React from "react";
class Mycomponent extends React.Component {
    state = {
        name: 'TMT',
        address: 'KBT',
        age:12
    };
    // --------   = (event) =>
    handleClick (event) {
        console.log(">>click me my button");
       
        
        this.setState({
            name: "kssfsn",
            age: Math.floor((Math.random()*100)+1)
        })
    }
    handleOnMoverOver(event) {
    //  console.log(event.pageX)   
    }
    // JSX
    render() {
        return (
            <div> my first Component

                {Math.random()}  
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>
                    Hover me
                </button>
                <button onClick={(event) => {this.handleClick(event)}}>
                    Click me
                </button>
            </div>
        );
    }
}
export default Mycomponent;