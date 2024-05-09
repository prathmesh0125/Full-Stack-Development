import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const client=new PrismaClient();
export async function GET(req:NextRequest) {

 const user=await client.user.findFirst();

  return NextResponse.json({
    username:user?.username,
    password:"ksmdkd"
  })
}
export async function POST(req:NextRequest) {

  const body=await req.json();
await client.user.create({
  data:{
    username:body.username,
    password:body.password
  }
})

  return Response.json({
   msg:"you are logged in"
  });
}
