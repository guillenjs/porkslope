import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
import History from './History'
import Category from './Category'


class App extends React.Component {

  state ={
    category: ""
  }

  handleCategory = (category) => {
    this.setState({
      category: category
    })
  }


  render(){

  return(
    <div>
    <Navbar />
    <Switch>

      <Route path="/" exact>
        <Home handleCategory={this.handleCategory}/>
      </Route>

      <Route path="/cart" exact>
        <Cart />
      </Route>

      <Route path="/history" exact>
        <History />
      </Route>


{/* Set this state category into category container to test, write function to render array later */}
      <Route path="/category" exact>
        <Category category ={this.state.category}/>
      </Route>


    </Switch>
    </div>
  );
  }
}

export default App;
