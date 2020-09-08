import React, { Component } from 'react'
import HistoryItem from './HistoryItem'

export class history extends Component {


    renderItem = () => {
        return <HistoryItem />
    }

    render() {
        return (
            <div>

            <div className="total">
           {/* Maybe in here have option to sort by price */}
            </div>

            <div className="cart">
                <h1>History</h1>
                <div className="table">
                <table>
                 <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                        {
                            this.renderItem()
                        }
                   </tbody> 
                 </table>
                </div>
            </div>
        </div>
        )
    }
}

export default history
