import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import Navbar from './containers/Navbar'
import Home from './containers/Home'
import Cart from './containers/Cart'
import History from './containers/History'
import Category from './containers/Category'
import Login from './containers/Login'
import uniqid from 'uniqid'
// import category from './category.json'


class App extends React.Component {

  state ={
    category: "",
    loggedIn: false,
    items: [],
    cart: []
  }

  componentDidMount() {
    //Do fetch with rails server 
    //Set up serializer in order to access categorie items through category
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(prodcuceArr => {this.setState({items: prodcuceArr})})
  }

  handleCategory = (category) => {
    this.setState({
      category: category
    })
  }

  toggleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  handleCart = (item) => {
   
    let newItem = {...item}
      newItem.id= uniqid() 
     
    const newArr = [...this.state.cart, newItem]

    this.setState({
      cart: newArr
    })

  }

  handleCartDelete = (item) => {
    
    let newArr = this.state.cart.filter( (cartItem) => cartItem !== item )
    this.setState({
      cart: newArr
    })
    
  }

renderApp = () => {
  if (this.state.loggedIn === false) {
    return <Login loggedIn = {this.toggleLogin}/>
  }
  else {
    
     return <div>
      <Navbar />
            <Switch>

              <Route path="/" exact>
                <Home handleCategory={this.handleCategory}/>
              </Route>

              <Route path="/cart" exact>
                <Cart 
                  cart={this.state.cart}
                  handleCartDelete = {this.handleCartDelete}
                />
              </Route>

              <Route path="/history" exact>
                <History />
              </Route>
        {/* Set this state category into category container to test, write function to render array later */}
              <Route path="/category" exact>
                <Category 
                    category ={this.state.category} 
                    items ={this.state.items} 
                    handleCart={this.handleCart}
                    handleCategory={this.handleCategory}
                    cart = {this.state.cart}
                />  
              </Route>

          </Switch> 
        </div>
  }
  
}

  render(){
   console.log(this.state.cart)
  return(
    <div>
      {this.renderApp()}
    </div>
  );
  }
}

export default App;
