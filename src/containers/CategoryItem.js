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
        console.log(this.props.item)
        const {name, price} = this.props.item
    return (
             <tr>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                <input
                                name="add"
                                type="button"
                                onClick={()=> this.props.handleCart(this.props.item)}
                            />
                </td>
            </tr>
    )
    }
}

export default CategoryItem
