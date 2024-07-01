export default function Recipedeatailsitem({ recipeData }: any) {
  return (
    <div>
      <div className=" p-6 lg:max-w-2xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img src={recipeData?.image} 
            name={recipeData?.name}
            className="w-4/5 rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
