import React from 'react'

function HistoryItem(props) {
    const {date} = props.item
    return (
        <tr>
            <td>{date}</td>
            <td>$200</td>
        </tr>
    )
}

export default HistoryItem
