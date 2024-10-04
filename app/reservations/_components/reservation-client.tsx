"use client";

import { Reservation } from "@prisma/client";
import React from "react";
import { ReservationCard } from "./reservation-card";

import { toast } from "sonner";
import { ReservationRoom } from "@/types";
import { useConfirm } from "@/hooks/use-confim";
import axios from "axios";
export const ReservationClient = ({
  reservations,
}: {
  reservations:
    | (Reservation & {
        room: ReservationRoom;
      })[]
    | null;
}) => {
  const [ConfrimDialog, confim] = useConfirm(
    "Delete Reservation",
    "Are you sure you want to delete this reservation"
  );
  const handleDelete = async (reservationId: string) => {
    try {
      const ok = await confim();
      if (!ok) return;
      const res = await axios.delete(`/api/reservations/${reservationId}`)
      window.location.reload()
      console.log(res);
      toast.success("Reservation deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong while deleting the reservation!");
    }
  };

  return (
    <>
      <ConfrimDialog />
      <div className="lg:p-20 md:p-16 sm:p-8 p-4">
        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 lg:gap-1 md:gap-2 gap-3">
          {reservations?.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              room={reservation.room}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};
