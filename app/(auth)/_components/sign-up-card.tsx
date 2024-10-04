"use client";
import React, { useState, useTransition } from "react";
import * as z from "zod";

import { AuthTypes } from "../types";
// import { FaGoogle } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Success } from "./Success";
import { Error } from "./Error";
import { Register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const SignUpCard = ({
  setState,
}: {
  setState: (state: AuthTypes) => void;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()
  const [isErr, setIsErr] = useState<string | undefined>("");
  const [isSuccess, setIsSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    setIsErr("");
    setIsSuccess("");
    startTransition(() => {
      Register(values).then((data) => {
        setIsErr(data?.error);
        setIsSuccess(data?.success);
        form.reset();
        router.refresh();
      });
    });
  };
  return (
    <Card className="  w-full sm:mx-0 mx-3 sm:w-[350px] md:w-[450px] ">
      <CardContent>
        <CardHeader>
          <CardTitle className=" text-lime-600 font-semibold tracking-wide lg:text-2xl text-xl ">
            Welcome to Katuumula Bookings
          </CardTitle>
          <CardDescription>
            Sign up to be part of our community{" "}
          </CardDescription>
        </CardHeader>
        <div className=" w-full px-4">
          <Form {...form}>
            <form
              action=""
              onSubmit={form.handleSubmit(onSubmit)}
              className=" space-y-2 w-full"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John doe"
                        type="text"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Reee@gmail.com"
                        type="email"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Success message={isSuccess} />
              <Error message={isErr} />
              {/* <div className=" w-full ">
                <Button
                  className=" w-full flex gap-x-2 text-sm font-semibold text-brand-black "
                  variant="ghost"
                  size="lg"
                >
                  <FaGoogle className=" size-5 text-blue-400" />
                  <span>Continue with google</span>
                </Button>
              </div> */}
              <div className="items-center flex gap-x-1 justify-center w-full text-sm font-light">
                Already have an account?
                <span
                  className=" hover:underline text-purple-300 font-extralight cursor-pointer"
                  onClick={() => setState("signIn")}
                  
                >
                  Sign in
                </span>
              </div>
              <div className=" w-full flex px-4 justify-end items-center">
                <Button
                  className=" font-semibold text-white text-sm font-mono"
                 type="submit"
                  disabled={isPending}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
