"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ReservationRoom } from "@/types";
import { Reservation } from "@prisma/client";
import Image from "next/image";

export const ReservationCard = ({
  room,
  reservation,
  onDelete
}: {
  room: ReservationRoom;
  reservation: Reservation;
  onDelete :(reservationId:string)=>void,
}) => {

  return (
    <>
      <div
      className=" col-span-1 bg-white
    shadow-medium min-h-[300px] rounded-md 
     active:opacity-95 group overflow-hidden"
      onClick={() => {}}
    >
      <div className="  w-full  h-full relative flex flex-col gap-y-1">
        <div className=" w-full h-[250px] relative">
          <Image
            src={room.imageUrl}
            alt="Placeholder image"
            fill
            className="bg-center bg-cover rounded-md"
          />
        </div>

        <div className=" lg:px-2 px-3 flex flex-col gap-y-1 mt-2 relative pb-0.5">
          <div className=" w-full px-1 flex justify-start gap-x-2 items-center text-sm">
            <p className=" font-semibold text-green-400 ">
              {new Date(reservation.startDate).toLocaleDateString("en-US", {
                weekday: "long", // Optional: 'short', 'narrow' for shorter day names
                year: "numeric",
                day: "numeric",
              })}
            </p>
            <span className=" font-light text-sm">to</span>
            <p className=" font-semibold text-green-400">
              {new Date(reservation.endDate).toLocaleDateString("en-US", {
                weekday: "long", // Optional: 'short', 'narrow' for shorter day names
                year: "numeric",
                day: "numeric",
              })}
            </p>
          </div>
          <div className=" w-full relative flex justify-between items-center">
            <p className=" text-xs font-bold text-neutral-darkest font-mono tracking-wide capitalize">
              {room.name}
            </p>
            <button
              className=" px-4 py-1 bg-emerald-500 text-white font-bold text-sm
              flex items-center justify-center gap-x-2 tracking-wide rounded-lg hover:bg-emerald-500"
            >
              <span
                className=" text-xs font-mono font-light text-neutral-100 mr-1
                  "
              >
                Total price
              </span>
              <span className=" text-xs font-semibold">Kes</span>
              {reservation.totalPrice.toLocaleString("en")}
            </button>
          </div>
          <Separator className=" bg-black my-1" />
          <div className=" w-full flex items-center justify-center px-8 mb-1">
            <Button variant={"reserve"} 
            className=" w-full"
            onClick={()=>onDelete(reservation.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};
