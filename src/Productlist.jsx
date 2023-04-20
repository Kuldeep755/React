import React, { Component } from 'react';
import Product from './Product';


export default class Productlist extends Component {
    state={
        products: [
            
        ]
    }
    render() {
        return (
            <div class="row">
                {this.state.products.map((prod)=>{
                    return( 

                        <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                            <button className='btn btn-primary'>Payment</button>
                        </Product>
                        
                        )
                })}
               
            </div>
        );
    }
    componentDidMount=() =>{
        //fetch data from data source
        var promise = fetch("http://localhost:5000/products", { method: "GET" });
        promise.then((response) => {
            console.log(response);
            var promise2 = response.json();
            promise2.then((prods) => {
                console.log(prods);
                this.setState({ products : prods });
                });
        });
    }
        //console.log("componentDidMount - CourseLIst");
    handleIncrement=(product,maxValue)=>{
        let allproducts=[...this.state.products];
        let index=allproducts.indexOf(product);

        if(allproducts[index].quantity<maxValue){
            allproducts[index].quantity++;
            this.setState({products:allproducts});
        }
    }
    handleDecrement=(product,minValue)=>{
        let allproducts=[...this.state.products];
        let index=allproducts.indexOf(product);

        if(allproducts[index].quantity>minValue){
            allproducts[index].quantity--;
            this.setState({products:allproducts});
        }
    }
    handleDelete=(product)=>{
        let allproducts=[...this.state.products];
        let index=allproducts.indexOf(product);

        if(window.confirm("Are you sure you want to delete? ")){
            allproducts.splice(index,1);
            this.setState({products:allproducts});
        }
    }
}