import React,{Component} from "react";
import Updatecustomer from "./Updatecustomer";
import { Link } from "react-router-dom";

export default class Customers extends Component{
    state = {
        customers:[

        ]

    }
    render(){
        return(
            <div>
                <h2>Coustmer information</h2>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">imag</th>
      <th scope="col">quantity</th>
      <th scope="col">email</th>
      <th scope="col">Password</th>
      
    </tr>
  </thead>
  <tbody>
    {this.state.customers.map((cust)=>{
        return ( 
        <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>{cust.name}</td>
            <td>
            <img src={cust.imag} alt="" />
            </td>
            <td>{cust.quantity}</td>
            <td>{cust.email}</td>
            <td>{cust.Password}</td>
            <td>
            <Link to ={`/Updatecustomer/ ${cust.id}`}>update</Link>
            </td>
            
            
        </tr>
        )
    })}
  </tbody>
</table>
            </div>
        );
    }
    componentDidMount=() =>{
        var promise = fetch("http://localhost:5000/customers", { method: "GET" });
        promise.then((response) => {
            console.log(response);
            var promise2 = response.json();
            promise2.then((prods) => {
                console.log(prods);
                this.setState({ customers : prods });
                });
            });        
    }
}