//  http://localhost:8080/api/recipes?ingredients=chicken,tomato,cheese

const API_BASE_URL = "https://recipe-search-iyjr.onrender.com/api";

export async function searchRecipes(ingredients) {
  const response = await fetch(
    `${API_BASE_URL}/recipes?ingredients=${encodeURIComponent(ingredients)}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return response.json();
}

export async function getRecipeById(id) {
  const response = await fetch(
    `${API_BASE_URL}/recipes/${id}/information?includeNutrition=false`
  );
  if (!response.ok) {
    return null;
  }
  return await response.json();
}
