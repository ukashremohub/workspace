import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { NavLink, BrowserRouter} from 'react-router-dom'
import { Navbar, Nav, Dropdown, DropdownButton, Button} from 'react-bootstrap';
//import {Dropdown, Menu, Button} from 'antd';
import './Home.css';
// import roboAvatar from './roboAvatar.png';

class Home extends Component {
    constructor(props) {
        super(props)
        this.signIn = this.signIn.bind(this)
        this.signUp = this.signUp.bind(this)
        this.close = this.close.bind(this)
        this.cancel = this.cancel.bind(this)
      }
      signIn(){
        document.getElementById('id01').style.display='block';
        // document.getElementById('id02').style.display='none';
      }
      close(){
        document.getElementById('id01').style.display='none'; 
        document.getElementById('id02').style.display='none'; 
      }

      cancel(){
          document.getElementById('id01').style.display='none';
          document.getElementById('id02').style.display='none';
      }
      //  signUp
      signUp(){
        document.getElementById('id02').style.display='block';
      }
      
      render() {
        return (
            <div>
            <BrowserRouter>
            <div class="row-sm-12">
            <Navbar bg="primary" expand="lg" className="nav-position" >
            <div class="col-sm-6">            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-primary text-white"to="/">Home</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white"to="/">About</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white"to="/">Help</NavLink>
                </Nav>
                </Navbar.Collapse>               
                </div>
                <div class="col-sm-6">                
                <DropdownButton className="btn-pos" id="dropdown-basic-button" title="Join">
                <Dropdown.Item onClick={this.signIn}>Sign In</Dropdown.Item>
                <Dropdown.Item onClick={this.signUp}>Sign Up</Dropdown.Item>
                </DropdownButton>    
                </div>
                </Navbar>                
                </div>
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

                </BrowserRouter>
            </div>
        );
    }
}

export default Home;