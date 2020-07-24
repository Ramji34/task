import React from 'react';
import { TextField, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './style.css';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  navBar: {'top': AppBar.height}
}
  
class Registration extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["email"] = "";
        input["mobilenumber"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        alert('Registration Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your UserName.";
      }
      
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }

      if (!input["mobilenumber"]) {
        isValid = false;
        errors["mobilenumber"] = "Please enter your mobilenumber";
      }
      
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
      
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
  
  render() {
    return (
      <div>
          <center>
<MuiThemeProvider>
          <AppBar position="static"
           className="material-icons">
            <Toolbar variant="dense"/>
              <Typography variannpmt="h6" color="inherit">Welcome</Typography>
              </AppBar>
          <Drawer
            open={this.state.open}          
            width={200}
            containerStyle={styles.navBar}>
            <MenuItem>Drawer</MenuItem>
          </Drawer>
          </MuiThemeProvider>
        <h1>Registration Form </h1>
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label for="username">UserName:</label>
            <TextField 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter UserName" 
              id="username"
              variant="filled" />
   
              <div className="text-danger">{this.state.errors.username}</div>
          </div>
            <div class="form-group">
            <label for="email">Email Address:</label>
            <TextField 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email"
              variant="filled" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
          <div class="form-group">
            <label for="mobilenumber">Mobile Number:</label>
            <TextField 
              type="text" 
              name="mobilenumber" 
              value={this.state.input.mobilenumber}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter Mobile Number" 
              id="mobilenumber"
              variant="filled" />
   
              <div className="text-danger">{this.state.errors.mobilenumber}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <TextField 
              name="password"
              value={this.state.input.password} 
              onChange={this.handleChange}
              placeholder="Enter password"
              class="form-control" 
              variant="filled"/>
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
             <br></br>
          <Button type="submit" value="Submit" class="btn btn-success">Register</Button>
                   
            
        </form>
        </center>
      </div>
    );
  }
}
  
export default Registration;