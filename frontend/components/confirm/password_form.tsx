"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { passwordChangeSchema } from "@/schemas/auth";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { unAuthCall } from "@/axios/axios_instances";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export function PasswordForm({ uid, token }: { uid: string; token: string }) {
  const router = useRouter();


  const form = useForm<z.infer<typeof passwordChangeSchema>>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      uid: uid,
      token: token,
      password: "",
      rePassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof passwordChangeSchema>) {
    const response = await unAuthCall.post(
      "/users/reset_password_confirm/",
      data
    );
    if (response.status === 200) {
      router.push("/login");
    } else {
      console.error("Failed to set password:", response.statusText);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="w-full md:w-[400px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  {...field}
                  className="w-full md:w-[400px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
