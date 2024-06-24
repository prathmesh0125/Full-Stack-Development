'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function cart(){
  const pathname=usePathname();
  console.log(pathname)
  const searchParam=useSearchParams();
  console.log(searchParam.get('search'),searchParam.get('randomvalue'));
  return <div>
    this is cart page {pathname} {searchParam}
    
  </div>
}