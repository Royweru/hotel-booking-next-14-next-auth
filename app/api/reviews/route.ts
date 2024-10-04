import { prisma } from "@/lib/prismadb";

import { NextResponse } from "next/server";

import { serverUser } from "@/lib/serveruser";

export async function GET() {
  try {
    const user = await serverUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const res = await prisma.review.findMany({
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const user = await serverUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });
    const {
     message
    } = await req.json();
    const res = await prisma.review.create({
      data: { 
        userId:user.id,
        message
       },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
