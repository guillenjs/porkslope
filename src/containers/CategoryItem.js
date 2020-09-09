import React, { Component } from 'react'
import { render } from '@testing-library/react'

class CategoryItem extends Component {
   
   state = {
       checked: false
   } 

// handleAdd = (item) => {
//     this.setState({
//         checked: !this.state.checked
//     })
//     if (this.state.checked === true )
//     {
//       return ()=> (this.props.handleCart(item))
//     }
// }

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
