import React from 'react'

function HistoryItem(props) {
    let listSum = props.item.list_items.map(item => item.item.price)
    const {date} = props.item
    return (
        <tr>
            <td>{date}</td>
            <td>${listSum.reduce((a, b) => a + b, 0)}</td>
        </tr>
    )
}

export default HistoryItem
