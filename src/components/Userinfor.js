import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: 'TMT',
        address: 'KBT',
        age:12
    };
    handleOnMoverOver(event) {
        //  console.log(event.pageX)   
        }
        handOnchangeInput = (event) => {
            this.setState({
                name: event.target.value
            })
        }
        handOnchangeAge = (event) => {
            this.setState({
                age: event.target.value
            })
        }
        handleOnSubmit = (event) => {
            event.preventDefault();
            console.log(this.state)
        }
    render() {
        return (
            <div>     {/* my first Component

        {Math.random()}   */}
        My name is {this.state.name} and I'm {this.state.age} 
        {/* <button onClick={(event) => {this.handleClick(event)}}>
            Click me
        </button>
        <button onMouseOver={this.handleOnMoverOver}>
            Hover me
        </button>  */}
        {/* TÊN */}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <label> Your Name</label>
            <input
                value={this.state.name}
                type="text"
                onChange={(event) => this.handOnchangeInput(event) }
            />
            <button>Submit</button>
        <br></br>
        {/* AGE */}
        
        <label>Your Age</label>
            <input
                value={this.state.age}
                type="text"
                onChange={(event) => this.handOnchangeAge(event) }
            />
            <button>Submit</button>
                </form>
            </div>
        )
    }
} 

export default UserInfor;