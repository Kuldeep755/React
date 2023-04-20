import React,{Component} from "react";
import Navbar from "./Navbar";
import Productlist from "./Productlist";
import Customers from "./Customers";
import Login from "./Login";
import Newuser from"./Newuser";
import Pagenotfound from "./Pagenotfound";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Updatecustomer from "./Updatecustomer";


export default class App extends Component{
  constructor(props){
    super(props);
        this.state = {isLoggedIn :false};
    }
   
    render(){
        return(
            <BrowserRouter>
                <Navbar isLoggedIn ={this.state.isLoggedIn}/>
                <Routes>
                    <Route path="/" exact element={<Login loginStatus = {this.loginStatus} />}/>
                    <Route path="/customers" exact element={<Customers/>}></Route>
                    <Route path="/productlist" exact element={<Productlist/>}></Route>
                    <Route path="/newuser" exact element={<Newuser/>}></Route>
                    <Route path="/*" exact element={<Pagenotfound/>}></Route>
                    <Route path="/updatecustomer/:id" element={<Updatecustomer/>}></Route>
                </Routes>  
            </BrowserRouter>
        );
    }
    updateAge = () => {
        this.setState({age:25});
    }
    loginStatus =() => {
        this.setState ({isLoggedIn : true });
    };

}