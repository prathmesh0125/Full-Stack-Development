import Link from "next/link";
import { redirect } from "next/navigation";

export default function account(){
  const userdata=null;
  if(userdata==null) redirect('cart?search=product1&randomvalue=abced')
  return <div>
    <h1>account page</h1>
    <Link href="/">home</Link>
  </div>
}