import { Reservation } from "@prisma/client";

export type Room =
   {
      id:string,
      price: number;
      rating: string | undefined;
      name: string;
      categoryId: string;
      details: string | null;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
      reservations:Reservation[]
    }
;

export type ReservationRoom =
   {
      id:string,
      price: number;
      rating: string | undefined;
      name: string;
      categoryId: string;
      details: string | null;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
    }
;