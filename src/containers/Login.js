import React from 'react'
import porkslope from './icons/porkslope.png'

class login extends React.Component {
        state = {
            username:"",
            password: ""
        }

handleChange = (evt) => {
        
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

render() {
   
    return (
        <div>
            
        <img src={porkslope} className="loginLogo" alt="login logo" />
            <div className="login">
                <div className="loginText">
                    <textarea placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username}></textarea>
                    <textarea placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password}></textarea>
                    <input type="submit" value="Enter" onClick={this.props.loggedIn}/>
            </div>
            </div>
        </div>
        )
    }
}

export default login;
