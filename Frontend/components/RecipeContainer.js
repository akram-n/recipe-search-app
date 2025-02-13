"use client";

import { useState } from "react";
import RecipeSearch from "@/components/RecipeSearch";
import RecipeList from "@/components/RecipeList";

export default function RecipeContainer() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8">
      <RecipeSearch setRecipes={setRecipes} setLoading={setLoading} />
      {loading ? (
        <div className="text-center text-gray-600">
          Loading recipes... Please wait, the server may take up to 50 seconds
          to respond due to inactivity.
        </div>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}
