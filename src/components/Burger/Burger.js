import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      //   On retourne un array qui construit un autre array via le spread opérateur
      //   Array est une propriété JS qui permet de créer un nouvel array
      //   props.ingredients[ingredientKey] => donne la quantité de chaque ingrédient
      //   ...Array(props.ingredients[ingredientKey]) => crée des arrays d'une longueur égale à la quantité de chaque ingrédient
      //   Ces arrays sont eux-mêmes regroupés dans un array container qui est ensuite maper
      // _ signifie que la valeur du premier argument n'a pas d'importance
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          // key={ingredientKey + index} retourne le nom de l'ingrédient avec collé sa quantité
          // ingredientKey donne le type de l'ingrédient: bacon, salad...
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    }) //   Pour l'instant, on a un array multidimensionnelle (un array qui contient plusieurs arrays), on veut l'aplatir en un seul array qui contient toutes les valeurs
    // .reduce accepte deux arguments: la valeur précédente (arr) et la valeur actuelle (el), le [] vide est la valeur initiale
    .reduce((arr, el) => {
      // On ajoute (concat) à chaque fois à la valeur précédente, la valeur suivante
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;
