import React from 'react';
import { TextField, Button } from '@material-ui/core';
  
class Login extends React.Component {
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
        input["email"] = "";
        input["password"] = "";
        this.setState({input:input});
        this.props.history.push('/reg')
        
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      
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
        <h1>Login Form </h1>
        <form onSubmit={this.handleSubmit}>
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
          <Button type="submit" value="Submit" class="btn btn-success">Login</Button>
                   
            
        </form>
        </center>
      </div>
    );
  }
}
  
export default Login;