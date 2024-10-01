import { serverUser } from "@/lib/serveruser";
import { prisma } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { roomId: string };
  }
) {
  const user = await serverUser()
 if(!user) return new NextResponse("Unauthorized", { status: 401 });
  try {
    const res = await prisma.room.findUnique({
      where: {
        id: params.roomId,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: { roomId: string };
  }
) {
    const user = await serverUser()
 if(!user) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  try {
    const res = await prisma.room.update({
      where: {
        id: params.roomId,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: { roomId: string };
  }
) {
  try {
    const user = await serverUser()
 if(!user) return new NextResponse("Unauthorized", { status: 401 });
 
    const res = await prisma.room.delete({
      where: {
        id: params.roomId,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server Error", { status: 500 });
  }
}
