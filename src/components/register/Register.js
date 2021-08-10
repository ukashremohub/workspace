import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//import '../login/Login.css';

class Register extends Component {
    constructor(props){
        super(props)
        this.signUp = this.signUp.bind(this)
        this.close = this.close.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    signUp(){
        document.getElementById('id02').style.display = 'block';
    }

    close(){
        document.getElementById('id02').style.display='none'; 
    }

    cancel(){
        document.getElementById('id02').style.display='none';
    }

    render() {
        return (
            <div>
                {/* signUp */}
                <div id="id02" className="modal overflow-auto">
                <form className="modal_content animate" method="post">
                <div className="imgcontainer">
              <span onClick={this.close}className="close" title="Close Modal">&times;</span>
            <img src="/images/roboAvatar.png" alt="Avatar" className="avatar"/>
            </div>
                <div className="container">
                <label for="uname"><b>Firstname</b></label>
                <input type="text" placeholder="Enter Firstname" name="uname" required/>
                <label for="uname"><b>Secondname</b></label>
                <input type="text" placeholder="Enter Secondname" name="uname" required/>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <Button  onClick={this.signIn} variant="success">submit</Button>
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

export default Register;