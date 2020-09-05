import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Cart from './Cart'
import Category from './Category'


class App extends React.Component {
  render(){

  return(
    <div>
    <Navbar />
    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/cart" exact>
        <Cart />
      </Route>

      <Route path="/category" exact>
        <Category />
      </Route>


    </Switch>
    </div>
  );
  }
}

export default App;
