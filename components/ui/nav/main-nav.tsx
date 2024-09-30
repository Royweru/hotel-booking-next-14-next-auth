"use client";

import { MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { User } from "@prisma/client";
import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";
export const MainNav = ({
  user,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: User | null;
}) => {
  //   const navRef = useRef();

  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Teams", path: "javascript:void(0)" },
    { title: "Blog", path: "javascript:void(0)" },
  ];

  const userNavigation = [
    { title: "Reach out", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Testimonials", path: "javascript:void(0)" },
  ];

  const onLogout =()=>{
    logout()
  }
  return (
    <nav className="bg-white w-full top-0 z-20 border-b-2 border-black">
      <div className=" w-full flex justify-between px-8 md:px-12 lg:px-16 py-2 items-center">
        <a href="/" className=" hover:scale-105 cursor-pointer">
          <img src="/logo.png" width={120} height={50} alt="Float UI logo" />
        </a>
        <>
          {user ? (
            <div className=" flex items-center gap-x-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className=" bg-sky-200 text-xl font-semibold text-black">
                  {user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant={"ghost"} size={"icon"}>
                    <MenuIcon className=" size-6 text-gray-700 font-semibold" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-64 bg-black/85 p-2">
                  {userNavigation.map((item) => (
                    <DropdownMenuItem
                      key={item.title}
                      className=" text-sm font-semibold text-neutral-200"
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className=" bg-white text-white my-1" />
                  <DropdownMenuItem className=" font-semibold text-md
                 text-center text-lime-700 ">
                      Reservations
                       <span className="font-bold ml-2">
                        0
                       </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className=" font-semibold text-rose-400 ">
                    <Button
                      variant={"ghost"}
                      type="submit"
                      className=" w-full relative font-semibold"
                      onClick={onLogout}
                    >
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className=" flex gap-x-3 items-center ">
              <Button
                variant={"secondary"}
                className=" px-6 font-semibold text-sm"
                size={"lg"}
              >
                <Link href={"/auth"}>Sign Up</Link>
              </Button>

              <Button className=" px-6 " size={"lg"}>
                <Link href={"/auth"}>Login</Link>
              </Button>
            </div>
          )}
        </>
      </div>
    </nav>
  );
};