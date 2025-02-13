"use client";
import Link from "next/link";
import Image from "next/image";

export default function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipe/${recipe.id}`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <div className="space-y-2 text-sm text-gray-700 flex-grow">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Available Ingredients:
                  </h4>
                  <p className="text-gray-600">
                    {recipe.usedIngredients
                      .slice(0, 3)
                      .map((ing) => ing.name)
                      .join(", ")}
                    {recipe.usedIngredients.length > 3 && "..."}
                  </p>
                </div>
                {recipe.missedIngredients.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Missing Ingredients:
                    </h4>
                    <p className="text-gray-600">
                      {recipe.missedIngredients
                        .slice(0, 3)
                        .map((ing) => ing.name)
                        .join(", ")}
                      {recipe.missedIngredients.length > 3 && "..."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
