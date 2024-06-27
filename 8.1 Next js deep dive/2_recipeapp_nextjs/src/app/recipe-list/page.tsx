import RecipeList from "@/components/ui/recipe-list";
async function fetchlistofrecipe() {
  try {
    const response = await fetch("https://dummyjson.com/recipes")
    const data=await response.json();
    return data?.recipes;
  } catch (error:any) {
    throw new Error(error)
}
}
interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  // Add more properties as per your actual data structure
}


export default async function Recipe() {

  const recipelist:Recipe[]= await fetchlistofrecipe();
  //@ts-ignore
  return <RecipeList recipelist={recipelist} />;
}
