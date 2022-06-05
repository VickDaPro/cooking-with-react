import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Dosa",
    servings: 3,
    cookTime: 15,
    instructions:
      "1. Make the dosa batter.\n2. Cook the dosa.\n3. Eat the dosa.",
    ingredients: [
      {
        id: 1,
        name: "Rice flour",
        amount: "1 pound",
      },
      {
        id: 1,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Masala Dosa",
    servings: 5,
    cookTime: 25,
    instructions:
      "1. Make the dosa batter and aloo masala.\n2. Cook the dosa and aloo masala.\n3. Eat the dosa.",
    ingredients: [
      {
        id: 1,
        name: "Aloo masala",
        amount: "1 pound",
      },
      {
        id: 1,
        name: "Chilli powder",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
