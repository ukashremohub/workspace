import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props)
        // this.signIn = this.signIn.bind(this)
        this.close = this.close.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    // signIn(){
    //     document.getElementById('id01').style.display='block';
    // }

    close(){
        document.getElementById('id01').style.display='none'; 
    }

    cancel(){
        document.getElementById('id01').style.display='none';
    }

    render() {
        return (
            <div>
                {/* signIn */}
                <div id="id01" className="modal overflow-auto">
                <form className="modal_content animate" method="post">
                <div className="imgcontainer">
              <span onClick={this.close}className="close" title="Close Modal">&times;</span>
            <img src="/images/roboAvatar.png" alt="Avatar" className="avatar"/>
            </div>
                <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <Button type="submit"  variant="success">Login</Button>
                <label> <input type="checkbox" name="remember" /> Remember me</label>
                </div>
                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                <Button type="button" variant="danger" onClick={this.cancel} className="cancelbtn">Cancel</Button>
                <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
                </form>
                </div>
            </div>
        );
    }
}

export default Login;