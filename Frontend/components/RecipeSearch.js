"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { searchRecipes } from "@/lib/api";

export default function RecipeSearch({ setRecipes, setLoading }) {
  const [ingredients, setIngredients] = useState("");

  async function fetchRecipes() {
    if (!ingredients) return;
    setLoading(true);
    try {
      const data = await searchRecipes(ingredients);
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-8">
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients (e.g., tomato, cheese, basil)"
            className="w-full p-3 pr-10 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
            size={20}
          />
        </div>
        <button
          type="button"
          onClick={fetchRecipes}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Find Recipes
        </button>
      </div>
    </form>
  );
}
