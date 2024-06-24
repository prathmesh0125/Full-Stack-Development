// app/[id]/page.tsx


export default function Details({params}:any) {

  console.log(params)


  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID</p>
    </div>
  );
}
