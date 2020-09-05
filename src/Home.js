import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import grocerystore from './grocerystore.png'
import fridge from './icons/fridge.png'
import fridge2 from './icons/fridge2.png'
import fridge3 from './icons/fridge3.png'
import fish from './icons/fish.png'
import products from './icons/products.png'
import coffee from './icons/coffee.png'
import produce from './icons/produce.png'



export class Home extends Component {

    render() {
        console.log(grocerystore)
        return (
            <div>
               <img src={grocerystore} className="grocery" alt="grocery store" />
               <NavLink to="/category"><img src={fridge} id="fridge" className="categories" alt="fridge" /></NavLink>
               <NavLink to="/category"><img src={fridge2} id="fridge2" className="categories" alt="fridge2" /></NavLink>
               <NavLink to="/category"><img src={fridge3} id="fridge3" className="categories" alt="fridge3" /></NavLink>
               <NavLink to="/category"><img src={fish} id="fish" className="categories" alt="fish" /></NavLink>
               <NavLink to="/category"><img src={products} id="products" className="categories" alt="products" /></NavLink>
               <NavLink to="/category"><img src={coffee} id="coffee" className="categories" alt="products" /></NavLink>
               <NavLink to="/category"><img src={produce} id="produce" className="categories" alt="produce" /></NavLink>
            </div>
        )
    }
}

export default Home
