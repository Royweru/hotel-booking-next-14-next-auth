import { prisma } from "@/lib/prismadb";

import { NextResponse } from "next/server";

import { serverUser } from "@/lib/serveruser";

export async function GET() {
  try {
    const user = await serverUser();
    if (!user) return new NextResponse("Unauthorized", { status: 401 });

    const res = await prisma.room.findMany({
      include:{
        reservations:true
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function POST(req: Request) {
  const user = await serverUser();
  if (!user) return new NextResponse("Unauthorized", { status: 401 });
  const body = await req.json();

  try {
    const res = await prisma.room.create({
      data: { ...body },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
