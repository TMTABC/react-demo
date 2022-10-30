import React from "react";
class Mycomponent extends React.Component {
    state = {
        name: 'TMT',
        address: 'KBT',
        age:12
    };
    handleClick(event) {
        console.log(">>click me my button");
        console.log('My name is ',this.state.name)
    }
    handleOnMoverOver(event) {
     console.log(event.pageX)   
    }
    // JSX
    render() {
        return (
            <div> my first Component

                {Math.random()}  
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>
                    Hover me
                </button>
                <button onClick={this.handleClick}>
                    Click me
                </button>
            </div>
        );
    }
}
export default Mycomponent;