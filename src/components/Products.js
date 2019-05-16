import React, {Component} from 'react';
import Aux from './hoc/Aux';
import classes from './Products.css';
import Product from './Product/Product';

const items = [
    {label: 'Latte', type: 'salad'},
    {label: 'Cappuccino', type: 'cappuccino'},
    {label: 'Americano', type: 'americano'}
]

class Products extends Component{
    // state={
    //     items: ['Latte', 'Americano', 'Cappuccino']
    // }
    
    render(){
        return(
            <Aux>
                <div className={classes.Products}>
                <p>Here is a list of our current products:</p>
                    {items.map(i=>{
                        return(
                        <p>{i.label}</p>
                        )
                    })}
                </div>
                
            </Aux>
        )

        
    }
}

export default Products;