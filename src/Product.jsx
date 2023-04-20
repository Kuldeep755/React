import React, { Component } from 'react';

class Product extends Component {
    state={
        product:this.props.product
    }
    render() {
        return (
            <div class="col">
                <div class="card" style={{ width: 200 }}>
                <i class="fa fa-window-close" aria-hidden="true" onClick={()=>{this.props.onDelete(this.state.product)}}></i>
                    <img src={this.props.product.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{this.props.product.productname}</h5>
                        <h6 class="card-title">{this.props.product.price}</h6>
                        <div>
                        {this.state.product.quantity}
                        <button type='button' className='btn-btn-outline-primary' onClick={()=>{this.props.onIncrement(this.state.product,5)}}>+</button>
                        <button type='button' className='btn-btn-outline-primary' onClick={()=>{this.props.onDecrement(this.state.product,0)}}>-</button>
                        {/* {this.state.product.quantity} */}
                        </div>
                        <div className="card-footer text-right">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;