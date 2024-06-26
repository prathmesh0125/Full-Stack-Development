"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function clientsidedataFetching() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

async function fetchdata() {
  try{
    setloading(true);
    const apiResponse = await fetch(`https://dummyjson.com/users`);
    const result = await apiResponse.json();
    if(result?.users){
      setdata(result.users);
      setloading(false);
    }
  }
  catch(error:any)
  {
  console.log(error);
  setdata([]);
  setloading(false);

  }
}

useEffect(()=>{
  fetchdata();
},[])

if(loading){
  return <div className="h-screen flex justify-center items-center">
    <h1 className="text-2xl">Loading...</h1>
  </div>
}
  return (
    <div>
      <h1 className="text-center text-2xl border-b">client Side Data Fetching</h1>
      {data && data.length > 0 ? (
        data.map((user: any) => {
          return (
            <div className="py-3" key={user.id}>
              <div className="py-3 bg-slate-200 m-auto flex justify-center flex-col items-center">
                <div>
                  <Link href={`/server-data-fetching/${user.id}`}>
                    <h1 className="cursor-pointer">
                      FirstName: {user.firstName}
                    </h1>
                  </Link>

                  <h2>LastName: {user.lastName}</h2>
                  <h3>Email: {user.email}</h3>
                </div>
              </div>
            </div>
          );
        })
      ) : null}
    </div>
  );
}
