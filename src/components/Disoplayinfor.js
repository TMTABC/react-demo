import React from 'react';

class DisplayInfor extends React.Component{
    state = {
        isShowisUser : true
    }
    handlesShowHide = () => {
        this.setState({
            isShowisUser: !this.state.isShowisUser
        }
        )
    }
    render() {
        // console.log(this.props)
        const { listUser } = this.props;
        // console.log(listUser)
// ..........props => properties
        // console.table(listUser) giới thiệu
        return (
            <div>
                <div>
                    <span onClick={() => { this.handlesShowHide() }}>
                        {this.state.isShowisUser === true ? "Hide list users:" : "Show list users:"}
                    </span>
            </div>
                {this.state.isShowisUser &&
                    <div>
                        {listUser.map((user) => {
                   



                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;