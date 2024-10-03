import { prisma } from "@/lib/prismadb";

import { NextResponse } from "next/server";

import { serverUser } from "@/lib/serveruser";

export async function GET() {
  try {
    const user = await serverUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const res = await prisma.reservation.findMany({
      include:{
        room:true
      }
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
      endDate,
      startDate,
      roomId,
      totalPrice
    } = await req.json();
    const res = await prisma.reservation.create({
      data: { 
        userId:user.id,
        endDate,
        startDate,
        totalPrice,
        roomId
       },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
