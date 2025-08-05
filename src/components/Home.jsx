import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../api";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecipes()
      .then(setRecipes)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="animate-fadeIn">
      <h2 className="mb-4 text-center">Popular Recipes</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.id}>
            <div className="card h-100">
              <img src={recipe.image} className="card-img-top" alt={recipe.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.title}</h5>
                <Link to={`/recipe/${recipe.id}`} className="btn btn-primary mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
