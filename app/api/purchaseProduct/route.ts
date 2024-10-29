
import { serverUser } from "@/lib/serveruser";
import { lemonSqueezyApiInstance } from "@/lib/axios";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const reqData = await req.json();
 
const user = await serverUser()
    if(!user) redirect("/sign-in")
    
    if (!reqData.variantId)
      return NextResponse.json("Product id is required", { status: 400 });

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
              id: process.env.LEMON_SQUEEZY_STORE_ID.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
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
