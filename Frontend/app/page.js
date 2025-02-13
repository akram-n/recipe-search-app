import RecipeContainer from "@/components/RecipeContainer";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Find Delicious Recipes
        </h1>
        <p className="text-xl text-gray-600">
          Enter ingredients you have, and we'll show you what you can make!
        </p>
      </section>
      <RecipeContainer />
    </div>
  );
}
