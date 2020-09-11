import React, { Component } from 'react'
import CategoryItem from './CategoryItem'


export class Category extends Component {

    renderItems = () => {
        
        let renderArr = this.props.items.filter(category => category.name === this.props.category)

        return renderArr.map(category => 
            (category.items.map(item =>
                 <CategoryItem 
                 key={item.id}
                  item={item} 
                  handleCart={this.props.handleCart}
                  />
                  )))

    }

    
    

    render() {
        return (
            <div>
            <div className="total">
                <label>
                    <h3>Categorie</h3>
                    <select value={this.props.category} onChange={(e)=> this.props.handleCategory(e.target.value)}>
                        <option value="cheese">Cheese</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fish">Fish</option>
                        <option value="meat">Meat</option>
                        <option value="products">Products</option>
                        <option value="coffee">Coffee</option>
                        <option value="fruit">Fruit</option>
                    </select>
                </label>
                <div>
                    Cart Count: {this.props.cart.length}
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
