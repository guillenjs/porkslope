import React, { Component } from 'react'
import CartItem from './CartItem'
import uniqid from 'uniqid'

export class Cart extends Component {
    state = {
        sort: ""
    }

    handleChange = (evt) => {
        this.setState({
            sort: evt.target.name 
        })
    }

    renderItem = () => {
        return this.props.cart.map((item) => <CartItem key={uniqid()} item={item} handleCartDelete={this.props.handleCartDelete}/>)
    }

    // add the value of all items in the cart together
    cartSum = ()=> {
        let cartValue = this.props.cart.map(item => item.price)
         return cartValue.reduce((a,b) => a + b, 0)
    }

  

    render() {
        
        return (
            <div>

                <div className="total">
                    <h2>Total:</h2>
                    <div className="innertotal">
                        <h3>${this.cartSum()}</h3>
                    </div>
                   
                <div className="checkbox">      
                    <div >
                        <label>
                           low - high 
                            <input
                                name="low"
                                type="checkbox"
                                checked={this.state.sort === "low"}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    
                    <div>
                        <label>
                           high - low 
                            <input
                                name="high"
                                type="checkbox"
                                checked={this.state.sort === "high"}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                 </div>    
                </div>

                <div className="cart">
                    <h1>cart</h1>
                    <div className="table">
                    <table>
                     <tbody>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                            {
                                this.renderItem()
                            }
                       </tbody> 
                     </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
