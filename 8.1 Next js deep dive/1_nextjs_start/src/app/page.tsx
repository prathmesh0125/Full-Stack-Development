'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const rounter=useRouter();
  function handlernavigate(){
    rounter.push('/products')
  }
  return (
    <div className="flex items-center text-center justify-center h-screen items-" >
      <div className="flex flex-col  ">
        <h1 > winter is coming </h1>
 
        <Link className=" bg-gray-500 shadow-md border p-2"  href="/products">product</Link>
        <Link className=" bg-gray-500 shadow-md border p-2" href="account">account</Link>
        <h1>alternative way of doing rounting by using UseRouter</h1>
        <button className="bg-slate-800 text-white shadow-md border p-2" onClick={handlernavigate}>navigate to product page by using useroter</button>
        <Link className=" bg-gray-500 shadow-md border p-2" href="profile">account</Link>
        
      </div>
    </div>
  );
}
