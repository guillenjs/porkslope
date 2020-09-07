import React, { Component } from 'react'

export class history extends Component {
    render() {
        return (
            <div>

            <div className="total">
                {/* <h2>Total:</h2>
                <div className="innertotal">
                    <h3>$20.99</h3>
                </div> */}
               
            {/* <div className="checkbox">      
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
             </div>     */}
            </div>

            <div className="cart">
                <h1>History</h1>
                <div className="table">
                <table>
                 <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>01/05/2020</td>
                        <td>$200</td>
                    </tr>
                   </tbody> 
                 </table>
                </div>
            </div>
        </div>
        )
    }
}

export default history
