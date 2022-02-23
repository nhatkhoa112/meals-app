import React, { useEffect, useContext } from 'react';
import './RandomMeal.scss';
import { myContext } from '../context/context';

const RandomMeal = () => {
  const { fetchRandomMeal, randomMeal } = useContext(myContext);
  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);
  console.log(randomMeal);
  return (
    <div className="random">
      <div key={randomMeal.idMeal} className="random-grid">
        <div className="random-grid-controls">
          <img src={randomMeal.strMealThumb} alt="#" />
          <button onClick={fetchRandomMeal}> Generate Another Meal</button>
        </div>

        <div className="random-grid-instructions">
          <h4>Instructions</h4>
          <p>{randomMeal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomMeal;
