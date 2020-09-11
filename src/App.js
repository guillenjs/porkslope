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
    cart: [],
    lists: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(prodcuceArr => {this.setState({items: prodcuceArr})})
  }

  handleCategory = (category) => {
    this.setState({
      category: category
    })
  }

  toggleLogin = (username) => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
    console.log()

    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userArr => {
      let userlist = userArr.filter(user => user.name === username)
      this.setState({
        lists: userlist
      })
    })
  }

  handleCart = (item) => {
   
    let newItem = {...item}
      // newItem.id= uniqid() 
     
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



saveCart = () => {
console.log("inside cart")
 let userId = this.state.lists.map(user => user.id)

  return fetch('http://localhost:3000/lists', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          date: Date(),
          user_id: userId[0],
          list_items: this.state.cart
        }
        )
      })
      .then(res => res.json())
      .then(newList => 
        this.handleListSave(newList)
      ) 
}

handleListSave = (list) => {
  console.log('hello')
  // console.log(list)

  const listPost = (item) =>{
    fetch("http://localhost:3000/list_items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        list_id: list.id,
        item_id: item.id
      })
    })
    .then(res => res.json())
    .then(newlistitem => {
      let clearCart = []
      this.setState({
        cart: clearCart
      })
    })
  }

  this.state.cart.map(item => listPost(item))
}






renderApp = () => {
  if (this.state.loggedIn === false) {
    return <Login loggedIn = {this.toggleLogin}/>
  }
  else {
    console.log(this.state.cart)
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
                  saveCart = {this.saveCart}
                />
              </Route>

              <Route path="/history" exact>
                <History 
                  lists = {this.state.lists}
                />
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
