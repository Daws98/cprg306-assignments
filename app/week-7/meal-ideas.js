'use client'
// meal-ideas.js

import React, { useState, useEffect } from 'react';

// Function to fetch meal ideas
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; // Return array of meals or empty array if no meals found
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Load meal ideas whenever the ingredient prop changes
  useEffect(() => {
    const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
