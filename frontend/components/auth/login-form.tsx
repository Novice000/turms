"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
// import { login } from "@/axios/axios_instances";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import CustomDialog from "../shared/email_dialog";

function LoginForm(){

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    async function onSubmit(data: z.infer<typeof loginSchema>) {
        // try {
        //     const response = await login.post("/auth/jwt/create/", data);
        //     if (response.status !== 201 || !response.data) {
        //         console.error("Failed to obtain token:", response.statusText);
        //         return null;
        //     }
        //     localStorage.setItem("access_token", response.data.access);
        //     localStorage.setItem("refresh_token", response.data.refresh);
        //     return 201;
        // } catch (err) {
        //     console.error("Error logging in:", err?.response?.data?.detail);
        // }

        console.log(data)
    }

    return(

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="w-full md:w-[400px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} className="w-full md:w-[400px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Login</Button>
        <div>
        I don&apos;t have an account.{" "}<Link href="/register" className="underline text-blue-600">Register</Link>
        </div>
        <CustomDialog customProp={{name: "Forgot Password", title: "Reset Password", description: "Enter your email address to reset your password"}} />
      </form>
    </Form>
    )

};

export default LoginForm