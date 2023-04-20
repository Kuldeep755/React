import React,{Component} from "react";

export default class Newcustomer extends Component{
    state={
        name:"",
        phone:"",
        email:"",
        password:"",
        photo:""

    }
 
    render(){
        return(
            <div class="container">
                <h3 class="display-5"><center>New Customer</center></h3>

          <div class="mb-3 row">
            <label for="custname" class="col-sm-2 col-form-label">Customer Name</label>
            <div class="col-sm-10">
              <input 
              type="text"  
              class="form-control" 
              value={this.state.name}
              onChange={(event)=>{
                this.setState({name:event.target.value});

              }} />
              
            </div>
          </div>

          <div class="mb-3 row">
            <label for="custphone" class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-10">
              <input 
              type="Number"  
              class="form-control" 
              value={this.state.phone}
              onChange={(event)=>{
                this.setState({phone:event.target.value});

              }} />
              
            </div>
          </div>

          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input 
              type="text"  
              class="form-control" 
              value={this.state.email}
              onChange={(event)=>{
                this.setState({email:event.target.value});

              }} />
              
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input 
              type="password" 
              class="form-control" 
              value={this.state.password}
              onChange={(event)=>{
                this.setState({password:event.target.value});

              }}
              />
            </div>
          </div>

           <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Photos</label>
            <div class="col-sm-10">
              <input 
              type="text"  
              class="form-control" 
              value={this.state.photo}
              onChange={(event)=>{
                this.setState({photo:event.target.value});

              }} />
              
            </div>
          </div> 

          <div class="col-auto"> <center>
            {this.state.message}
            <button type="submit" class="btn btn-primary md-3" onClick={this.onSaveClick}> Confirm👍</button></center></div>
          </div>
        );
     
      
  }
onSaveClick = async(event)=>{
  event.preventDefault();

  var user={
    name:this.state.name,
    phone:this.state.phone,
    email:this.state.email,  
    password:this.state.password,
    photo:this.state.photo,
  };

  var response = await fetch("http://localhost:5000/customers",{
    method:"POST",
    body:JSON.stringify(user),
    headers:{
      "Content-type":"application/json",
    },
  });
  var body=await response.json();
}

  
}