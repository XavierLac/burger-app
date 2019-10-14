import React from 'react';
import classes from './Order.module.css';

const Order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    console.log(props.ingredients[ingredientName]);
    ingredients.push({
      name: ingredientName,
      // Quantité de chaque ingrédient
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ingredient.name}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        {/* Number.parseFloat car props.price est un string. Si on veut appliquer toFixed(2), il faut au préalable convertir en nombre */}
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
