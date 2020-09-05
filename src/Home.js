import React, { Component } from 'react'
import grocerystore from './grocerystore.png'
import fridge from './icons/fridge.png'

export class Home extends Component {

    render() {
        console.log(grocerystore)
        return (
            <div>
               <img src={grocerystore} className="grocery" alt="grocery store" />
               <img src={fridge} className="fridge" alt="fridge" />
            </div>
        )
    }
}

export default Home
