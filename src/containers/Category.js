import React, { Component } from 'react'


export class Category extends Component {

    render() {
        // console.log({category})
        return (

            // <div>
            //     <h1>{this.props.category}</h1>
            // </div>
            <div>

            <div className="total">
                <h2>Total:</h2>
                <div className="innertotal">
                    <h3>$20.99</h3>
                </div>
               
            <div className="checkbox">      
                {/* <div >
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
                </div> */}
             </div>    
            </div>

            <div className="cart">
                <h1>{this.props.category}</h1>
                <div className="table">
                <table>
                 <tbody>
                    <tr>
                        <th>Item </th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>Salmon</td>
                        <td>$20</td>
                    </tr>
                   </tbody> 
                 </table>
                </div>
            </div>
        </div>
            
        )
    }
}

export default Category
