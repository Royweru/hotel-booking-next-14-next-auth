import { prisma } from "@/lib/prismadb";

interface Iparams {
  userId?: string;
  roomId?: string;
}
export const GetReservations = async ({ userId, roomId }: Iparams) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};
  
    if (userId) query.userId = userId;
    if (roomId) query.roomId = roomId;
  
    try {
      const res = await prisma.reservation.findMany({
        where: query,
        include: {
          user: true,
          room: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
  
      const safeReservations = res.map((reservation) => {
        const modifiedPrice = reservation.room.price.toNumber();
        const modifiedRating = reservation.room.rating?.toFixed(); 
  
        const safeRoom = {
          ...reservation.room,
          price: modifiedPrice,
          rating: modifiedRating,
        };
  
        return {
          ...reservation,
          room: safeRoom,
        };
      });
  
      return safeReservations;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  