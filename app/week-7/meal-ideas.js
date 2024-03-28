import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error('Error fetching meal ideas:', error);
            return [];
        }
    };

    const loadAllMealIdeas = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.error('Error fetching all meal ideas:', error);
            setMeals([]);
        }
    };

    useEffect(() => {
        if (ingredient) {
            // Fetch meal ideas based on the selected ingredient
            fetchMealIdeas(ingredient).then((fetchedMeals) => {
                setMeals(fetchedMeals);
            });
        } else {
            // Fetch all meal ideas when no ingredient is selected
            loadAllMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient && ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;
