import Recipedeatailsitem from "@/components/ui/recipedeatails";

// Function to fetch recipe details by ID
async function fetchRecipeDetails(id: any) {
  try {
    const response = await fetch(`https://dummyjson.com/${id}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Component to render the details page
export default async function Details({ params }: { params: { details: string } }) {
  const recipeData :any= await fetchRecipeDetails(params?.details);
  console.log(recipeData);

  return (
    <Recipedeatailsitem recipedata={recipeData} />
    // <div>
    //   <h1>Detail Page</h1>
    //   <pre>{JSON.stringify(recipeData, null, 2)}</pre>
    // </div>
  );
}
