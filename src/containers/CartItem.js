import React from 'react'

function CartItem(props) {
    const {name, price} = props.item
    console.log(props.item)

    return (
     
     <tr>
        <td>{name}</td>
        <td>${price}</td>
    </tr>
       
    )
}

export default CartItem
