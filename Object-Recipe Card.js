// The Recipe Card
// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let recipe={
            Title: "Mole",
            Servings: 2,
            Ingredients: ["cinnamon" , "Cumin" , "Cocoa"]
}
console.log(recipe.Title);
console.log(`Serves: ${recipe.Servings}`);
console.log("Ingredients: ");
for(let i=0;i<recipe.Ingredients.length;i++){
  console.log(recipe.Ingredients[i]);
}