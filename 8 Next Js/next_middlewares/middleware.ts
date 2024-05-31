import { NextRequest, NextResponse } from "next/server";
let requestcount=0;
export function middleware(req:NextRequest,){
requestcount++;
const  res= NextResponse.next();
console.log("request count:",requestcount)
return res;
}

export const config={
  matcher:'/api/:path*'
}