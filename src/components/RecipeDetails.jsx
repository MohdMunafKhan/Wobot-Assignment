import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRecipeDetails } from "../api";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecipeDetails(id)
      .then(setRecipe)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="animate-fadeIn">
      <Link to="/" className="btn btn-secondary mb-3">
        ⬅ Back to Home
      </Link>
      <div className="card">
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body">
          <h2>{recipe.title}</h2>
          <h5 className="mt-4">Instructions</h5>
          <p dangerouslySetInnerHTML={{ __html: recipe.instructions || "No instructions available." }}></p>
          <h5 className="mt-4">Ingredients</h5>
          <ul>
            {recipe.extendedIngredients?.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
