import React, { Component } from 'react'


class CategoryItem extends Component {
   
    render() {
        
        const {name, price} = this.props.item
    return (
      <tr>
        <td>{name}</td>
            <td>${price}</td>
                <td>
                <button
                    name="add"
                    type="button"
                    onClick={()=> this.props.handleCart(this.props.item)}
                    >add</button>
                </td>
            </tr>
    )
    }
}

export default CategoryItem
