import React, { useMemo, useState, useEffect } from "react";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import Calender from "../calender";
import axios from "axios";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { useReserveModal } from "@/hooks/use-reserve-modal";
import { Range } from "react-date-range";
import { Button } from "../ui/button";
import { toast } from "sonner";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export const ReserveModal = () => {
  const { isOpen, onClose, data } = useReserveModal();
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(data?.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [paymentDialog,setPaymentDialog] = useState(false)
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if (dayCount && data?.price) {
        setTotalPrice(dayCount * data?.price);
      } else {
        setTotalPrice(data?.price);
      }
    }
  }, [dateRange, data?.price]);
  const reservations = data?.reservations;

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/reservations", {
        roomId: data?.id,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        totalPrice,
      });
      console.log(res.data);
      toast.error(`Congratulations you have booked a room successfully !`, {
        style: { backgroundColor: "green" },
      });
      onClose()
      setPaymentDialog(true)
    } catch (error) {
      console.log(error);
      toast.error("Oopsy something went wrong!", {
        style: { backgroundColor: "red" },
      });
    } finally {
      setIsLoading(false);
    }
  };
 const handleCheckout =async ()=>{
  try {

    const response = await axios.post('/api/purchaseProduct',{
     variantId:'579687'
    })
    
    window.open(response.data,"_blank")
 } catch (error) {
    console.error(error)
    toast.error("Something went wrong while proceeding to check out")
 }
 }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <Dialog open={paymentDialog} onOpenChange={setPaymentDialog}>
         <DialogContent className=" bg-neutral-50">
            <DialogHeader className=" font-bold text-xl  text-emerald-600">
              Pay 50% to reserve your room
            </DialogHeader>
            <DialogDescription className=" text-black/95 font-semibold">
              For you to have your room reserved you need to place at least a 50% deposit, otherwise another client can take your space
            </DialogDescription>
            <div className=" w-full px-2.5 py-4">
            <Button 
            variant={"outline"}
            className=" text-neutral-black font-semibold"
            onClick={handleCheckout}
            >
                 Proceed to checkout
            </Button>
            </div>
         </DialogContent>
      </Dialog>
      <DialogContent className=" bg-slate-100">
        <DialogHeader>
          <DialogTitle className=" text-xl font-bold text-emerald-600">
            Reserve {data?.name}
          </DialogTitle>
          <DialogDescription>{data?.details}</DialogDescription>
        </DialogHeader>
        <div className=" px-3 flex flex-col gap-y-1">
          <div
            className="
     bg-white
     rounded-xl
     border-[1px]
     border-neutral-200
     overflow-hidden
    "
          >
            <div className=" flex flex-row items-center gap-1 p-4">
              <div className=" text-xl font-semibold">Kes {data?.price.toLocaleString('en')}</div>
              <div className=" font-light text-neutral-600">night</div>
            </div>
            <hr />
            <Calender
              value={dateRange}
              disabledDates={disabledDates}
              onChange={(value) => setDateRange(value.selection)}
            />
            <hr />
            <div className=" p-4">
              <Button
                variant={"reserve"}
                className=" w-full font-semibold text-neutral-200"
                onClick={onSubmit}
                disabled={isLoading}
              >
                Reserve
              </Button>
            </div>
            <div
              className="
           p-4
           flex
           flex-row
           items-center
           justify-between
           font-semibold
           text-lg
          "
            >
              <div>Total</div>
              <div className="  font-semibold
               text-md tracking-wide">kes {totalPrice?.toLocaleString('en')}
               </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
