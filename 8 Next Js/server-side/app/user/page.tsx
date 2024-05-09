import axios from "axios"
async function fetchdata() {
  const response=await axios.get("http://localhost:3000/api/user")
  return response.data;
}

  export default async function(){
    const data=await fetchdata();
  return <div>
    <p>{data.username}</p>
  </div>
}