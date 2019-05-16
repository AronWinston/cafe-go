import React from 'react';
import classes from './Product.css';

const product = (props) => (
    <div key={props.label}>
        <h3>{props.label}</h3>
        <img className={classes.img} src={props.image} alt=''></img>
        <p>Description: <strong><em>{props.description}</em></strong></p>
        <p>Price: {props.price}</p>
        <button onClick={props.clicked} className={classes.Button}> Order Now ></button>
    </div>
);

export default product;

