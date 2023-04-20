import React, { Component } from "react";




export default class Login extends Component {
  render() {
    return (
      <div>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              value={this.state.email}
              onChange={(event)=>{
                this.setState ({email:event.target.value})
              }}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          </div>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword"
            value={this.state.password}
             onChange={(event)=>{
              this.setState ({password:event.target.value});
            }}
            />

          </div>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword"
             value={this.state.password}
             onChange={(event)=>{
              this.setState ({password:event.target.value});
            }} 
            />
          </div>
          <div class= "col-auto"> 
          {this.state.message}
          <button class="btn btn-primary" type="submit"
          onClick={this.onLoginClick}>Button</button>
        </div>
      </div>
    );
  }
  onLoginClick = async () => {
    console.log(this.state);
    var response = await fetch (`http://localhost5000/customers?email =${this.state.email}&password=${this.state.password}`,
    {method : "Get"}
    );
    var body = await response.json();
    console.log(body);
    if (body.length > 0) {
      this.setState ({
        message : < span className="text-success">Successfully Loogin</span>,
      });
      this.props.loginStatus();
    }
    else{
      this.setState({
        message : (
          < span className="text-success">Invalid Login , Please try again</span>
        ),
      })
    }
  }
}
