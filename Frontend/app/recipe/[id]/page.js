import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeById } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  if (!recipe) {
    notFound();
  }
  return {
    title: recipe.title,
    description: recipe.title,
  };
}

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipe = await getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        ></p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="text-gray-600">
                {ingredient.original}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">Instructions</h2>
          {recipe.analyzedInstructions?.length > 0 ? (
            <ol className="list-decimal list-inside">
              {recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number} className="text-gray-600">
                  {step.step}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-gray-600">No instructions available.</p>
          )}
        </section>
      </div>
    </div>
  );
}
