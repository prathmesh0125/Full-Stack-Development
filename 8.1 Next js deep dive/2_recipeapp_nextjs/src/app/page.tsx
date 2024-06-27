import Image from "next/image";
import Link from "next/link";
import Tabs from "./component/Tabs";



export default function Home() {
  return (
   <div>
    welcome to recipe app
    <Link href={"/recipe-list"}>Explore Recipes</Link>
    {/* <Tabs/> */}
   </div>
  );
}
