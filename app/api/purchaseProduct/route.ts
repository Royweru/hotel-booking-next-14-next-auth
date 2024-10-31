
import { serverUser } from "@/lib/serveruser";
import { lemonSqueezyApiInstance } from "@/lib/axios";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();
 const {variantId}  =body
const user = await serverUser()
    if(!user) redirect("/sign-in")
    
    if (!variantId)
      return NextResponse.json("Variant id is required", { status: 400 });

    const res = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes:{
            checkout_data:{
                custom:{
                    user_id:`${user.id}`
                }
            }
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID as string,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: variantId.toString(),
            },
          },
        },
      },
    }
 
);
const checkoutUrl = res.data.data.attributes.url

console.log(res.data)
return NextResponse.json(checkoutUrl)
  } catch (error) {
    console.error(error);
    return NextResponse.json("Failed to complete payment", { status: 500 });
  }
}
