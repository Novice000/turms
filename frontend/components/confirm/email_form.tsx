"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailChangeSchema } from "@/schemas/auth";
import { Button } from "@/components/ui/button";
import { z } from "zod";
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

export function EmailForm({ uid, token }: { uid: string; token: string }) {
  const router = useRouter();

  const form = useForm<z.infer<typeof emailChangeSchema>>({
    resolver: zodResolver(emailChangeSchema),
    defaultValues: {
      uid: uid,
      token: token,
      email: "",
      reEmail: "",
    },
  });

  async function onSubmit(data: z.infer<typeof emailChangeSchema>) {
    const response = await unAuthCall.post("/users/reset_email_confirm/", data);
    if (response.status === 200) {
      router.push("/login");
    } else {
      console.error("Failed to set email:", response.statusText);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
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
          name="reEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Email"
                  type="email"
                  {...field}
                  className="w-full md:w-[400px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
