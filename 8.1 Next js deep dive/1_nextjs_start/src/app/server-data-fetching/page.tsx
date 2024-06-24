async function fetchListOfUsers() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users", {
      cache: "force-cache",
    });
    const result = await apiResponse.json();
    return result.users;
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  console.log(listOfUsers);

  return (
    <div>
      <h1 className="text-center">Server Side Data Fetching</h1>
         {listOfUsers && listOfUsers.length > 0 ? (
        listOfUsers.map((user: any) => {
          return (
            <div className="py-3" key={user.id}>
              <div className="py-3 bg-slate-200 m-auto flex justify-center flex-col items-center">
                <div>
                  <h1>FirstName: {user.firstName}</h1>
                  <h2>LastName: {user.lastName}</h2>
                  <h3>Email: {user.email}</h3>
                </div>
              </div>
            </div>
          );
        })): (
          <p>No users found.</p>
        )}
    </div>
  );
}
