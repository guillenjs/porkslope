import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import grocerystore from './icons/grocerystore.png'
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
               <NavLink to="/category"><img src={fridge} id="cheese" className="categories" alt="fridge" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={fridge2} id="vegetables" className="categories" alt="fridge2" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={fridge3} id="fish" className="categories" alt="fridge3" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={fish} id="meat" className="categories" alt="fish" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={products} id="products" className="categories" alt="products" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={coffee} id="coffee" className="categories" alt="products" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
               <NavLink to="/category"><img src={produce} id="fruit" className="categories" alt="produce" onClick={(e)=> this.props.handleCategory(e.target.id)}/></NavLink>
            </div>
        )
    }
}

export default Home
