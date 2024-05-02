import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
export default async function Home() {
  const userdetails=await getUserDetails();
  console.log(userdetails)
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userdetails?.name}
            </div>
            
            {userdetails?.email}
        </div>
    </div>
</div>
  );
}
