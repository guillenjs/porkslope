import React, { Component } from 'react'
import CategoryItem from './CategoryItem'


export class Category extends Component {

    renderItems = () => {
        console.log(this.props.items.map(item => console.log(item)))
        // return <CategoryItem />
        return this.props.items.map(item =>
             <CategoryItem 
                key={item.id} 
                item ={item} 
                handleCart={this.props.handleCart}
                />)
    }

    
    

    render() {
        return (
            <div>

            <div className="total">
                <h2>Categorie</h2>
                {/* <div className="innertotal">
                    <h3>$20.99</h3>
                </div> */}
                  
            </div>

            <div className="cart">
                <h1>{this.props.category}</h1>
                <div className="table">
                <table>
                 <tbody>
                    <tr>
                        <th>Item </th>
                        <th>Price</th>
                        <th>Add </th>
                    </tr>
                         {this.renderItems()}
                   </tbody> 
                 </table>
                </div>
            </div>
        </div>
            
        )
    }
}

export default Category
