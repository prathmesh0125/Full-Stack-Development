async function fetchuserdetails(id: any) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await apiResponse.json();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function Userdetails({ params }: any) {
  console.log(params);

  const userdetail = await fetchuserdetails(params.userdetails);
  return (
    <div>
      <h1>user details</h1>
      <h1>{userdetail?.firstName}</h1>
      <h1>{userdetail?.lastName}</h1>
      <h1>{userdetail?.age}</h1>
      <h1>{userdetail?.email}</h1>
    </div>
  );
}
