import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipelist }: { recipelist: any[] }) {
  // console.log(recipelist); // For debugging purposes

  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <Link  href={"/"} className=" font-bold text-gray-800 mb-12">go home</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipelist && recipelist.length > 0 ? (
          recipelist.map((recipe) => (
            <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
              <Card>
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all ">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-full w-full object-cover object-top  "
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 ">
                      {recipe.name}
                    </h3>
                    <div className="mt-4 flex items-center flex-wrap gap-2 ">
                      <p className="text-lg text-gray-600">
                        Ratings: {recipe.rating}
                      </p>
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">
                        {recipe.cuisine}
                      </p>
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
