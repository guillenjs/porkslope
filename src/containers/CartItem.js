import React from 'react'

function CartItem(props) {
    const {name, price} = props.item

    return (
     
     <tr>
        <td>{name}</td>
        <td>${price}
        <input
            name={name}
            type="checkbox"
            // checked={this.state.isGoing}
            onChange={()=> props.handleCartDelete(props.item)} />
        </td>
    </tr>
       
    )
}

export default CartItem
