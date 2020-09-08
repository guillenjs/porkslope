import React, { Component } from 'react'
import CartItem from './CartItem'

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
        return <CartItem />
    }

    render() {
        console.log(this.state.sort)
        return (
            <div>

                <div className="total">
                    <h2>Total:</h2>
                    <div className="innertotal">
                        <h3>$20.99</h3>
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
