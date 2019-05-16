import React from 'react';
import Products from './components/Products'
import classes from './App.css';

function App() {
  return (
    <div className={classes.App}>
        <h1>Cafe-Go!</h1>
        
          <p>Navigation</p>
          <Products />
          <p>Checkout / Order Now / Pay</p>
        
    </div>
  );
}

export default App;
