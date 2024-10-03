import { Room } from '@/types'
import {create} from 'zustand'

interface ReserveModalStore{
    isOpen:boolean,
    onOpen :(data:Room)=>void,
    onClose:()=>void,
    data?:Room
}
export const useReserveModal = create<ReserveModalStore>((set)=>({
    isOpen:false,
    data:undefined,
    onOpen:(data:Room)=>set({data,isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))