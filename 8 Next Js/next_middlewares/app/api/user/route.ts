import { NextResponse } from "next/server";

export function GET(){
  return NextResponse.json({
    msg:"you are logged in"
  })
}