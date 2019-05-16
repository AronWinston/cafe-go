import React, {Component} from 'react';
import Aux from './hoc/Aux';
import classes from './Products.css';
import Product from './Product/Product';

let items = [
    {label: 'Latte', type: 'latte', description:'made with espresso and hot steamed milk', img:'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg', price: '$3.99'},
    {label: 'Cappuccino', type: 'cappuccino', description:'made with milk that has been frothed up with pressurized steam', img:'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps37407_THE1213734_37407_WEB-696x696.jpg', price: '$5.99'},
    {label: 'Americano', type: 'americano', description: 'a drink of espresso diluted with hot water', img:'https://static1.squarespace.com/static/5a7cbe247131a5f17b3cc8fc/t/5a90eebd53450a1796b51e9c/1519447750019/Americano-Coffee-Lounge-Ingredients.jpg?format=1000w', price: '$2.99'}
]

class Products extends Component{
    state={
        showItems: true, 
        items: [
            {label: 'Latte', type: 'latte', description:'made with espresso and hot steamed milk', img:'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg', price: '$3.99'},
            {label: 'Cappuccino', type: 'cappuccino', description:'made with milk that has been frothed up with pressurized steam', img:'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps37407_THE1213734_37407_WEB-696x696.jpg', price: '$5.99'},
            {label: 'Americano', type: 'americano', description: 'a drink of espresso diluted with hot water', img:'https://static1.squarespace.com/static/5a7cbe247131a5f17b3cc8fc/t/5a90eebd53450a1796b51e9c/1519447750019/Americano-Coffee-Lounge-Ingredients.jpg?format=1000w', price: '$2.99'}
        ]
    }

    toggleItemsHandler=()=>{
       let newItems = [...items]
       for(let i = 0; i < newItems.length-1; ++i){
        newItems.splice(i, 1);
        
        
        }
        this.setState({items: newItems})
    }
    
    render(){
        return(
            <Aux>
                <div className={classes.Products}>
                <h1>Here is a list of our current products:</h1>
                    {this.state.items.map(i=>{
                        return(
                    <div key={i.type}>
                    <Product
                    clicked={this.toggleItemsHandler}
                    label={i.label}
                    description={i.description}
                    image={i.img} 
                    price={i.price}/>
                    </div>
                        )
                    })}
                </div>
                
            </Aux>
        )

        
    }
}

export default Products;