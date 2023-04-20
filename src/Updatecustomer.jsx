import React,{Component} from "react";
import withRouter from "./withRouter";

 class Updatecustomer extends Component{
  constructor(props){
    super(props);
 
    this.state={
        
        name:"",
        phone:"",
        email:"",
        password:"",
        photo:""
    }
  }
    render(){
        return(
            <div class="container">
                <h3 class="display-5"><center>Update Customer</center></h3>
            

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
            <label for="photo" class="col-sm-2 col-form-label">Photos</label>
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
            <button type="submit" class="btn btn-primary md-3" onClick={this.onLoginClick}> Save👍</button></center></div>
          </div>
        );
     
      
  }
  componentDidUpdate =async() => {
    let id = this.props.params.id;
    let response = await fetch(`http://localhost:5000/customers/${id}`,{
      method: "GET",
    })
    let body =await response.json();
    console.log(body);
    this.setState({
      id :body.id,
      name :body.name,
      email: body.email,
      password : body.password,
      phone : body.phone,
      address :body.address,
    });
  };
  onUpdateClick = async(event) =>{
    event.preventDefault();
    let id =this.props.params.id;


    var customer ={
      name : this.state.name,
      email : this.state.email,
      password : this.state.password,
      address :this.state.address,
    };
    var response = await fetch(` http://localhost:5000/customers /${id}`,{ 
      method :"PUT",
      body : JSON.stringify(customer),
      headers : {
        "content-type": "application/json",
      },
    });
    var  body = await response.json ();
    console.log(body)
  }

}
export default withRouter (Updatecustomer);