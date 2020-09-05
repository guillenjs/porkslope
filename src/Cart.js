import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        return (
            <div>

                <div className="total">
                    total
                </div>

                <div className="cart">
                    <h1>cart</h1>
                    <div className="table">
                    <table>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Salmon</td>
                            <td>$20</td>
                        </tr>
                     </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
