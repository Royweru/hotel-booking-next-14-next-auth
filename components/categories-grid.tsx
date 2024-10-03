"use client"
import React from "react";
import { Category, Room } from "@prisma/client";
import { useRouter } from "next/navigation";
interface CategoryGridProps {
  categories:
    | (Category & {
        rooms: Room[];
      })[]
    | null;
}
export const CategoriesGrid = ({ categories }: CategoryGridProps) => {
  const router = useRouter()
  return (
    <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4 ">
      {categories?.map((category) => (
        <div
          key={category.id}
          className={`md:h-[350px] h-[300px] col-span-1 shadow-large bg-white relative cursor-pointer
             hover:scale-105 active:opacity-85`}
          style={{
            backgroundImage: `url(${category.rooms[0].imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={()=>router.push(`/categories/${category.id}`)}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end pl-4">
            <h2 className="text-white text-2xl font-bold ">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
