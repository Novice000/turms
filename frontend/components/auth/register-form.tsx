"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
// import { unAuthCall } from "@/axios/axios_instances";

function RegisterForm(){
    const formSchema = z.object({
        first_name: z.string(),
        last_name: z.string(),
        username: z.string(),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(12, { message: "Password must be at least 12 characters" }),
        re_password: z.string().min(12, { message: "Password must be at least 12 characters" }),
        role: z.enum(["responder", "requester"]),
    }).refine((data) => data.password === data.re_password, {
        message: "Email addresses must match",
        path: ["rePassword"],
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: "responder",
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            re_password: "",
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // try {
        //     const repsonse = await unAuthCall.post("/users/", data);
        //     if (repsonse.status === 201) {
        //         console.log(repsonse)
        //     } else {
        //         form.setError("email", { type: "server", message: repsonse.data.detail });
        //     }
        // } catch (err) {
        //     console.error("Error registering:", err?.response?.data?.detail);
        // }
        console.log(data)
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field}  className="w-full md:w-[400px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} className="w-full md:w-[400px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} className="w-full md:w-[400px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} type="email" className="w-full md:w-[400px]"/>
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
                  <Input placeholder="******" type="password" {...field} className="w-full md:w-[400px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="re_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat Password</FormLabel>
                <FormControl>
                  <Input placeholder="******" type="password" {...field} className="w-full md:w-[400px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role"  className="w-full md:w-[400px]"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="responder">Responder</SelectItem>
                    <SelectItem value="requester">Requester</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Register</Button>

          <div>
            I already have an account.{" "}
            <Link href="/login" className="text-blue-500 underline">Login</Link>
          </div>
        </form>
      </Form>
    );
}

export default RegisterForm
