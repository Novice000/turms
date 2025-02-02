"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { emailSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";



type customDialogProp = {
  name: string;
  description?: string;
  submit?: string;
  title?: string;
};

export function CustomDialog({ customProp } : { customProp: customDialogProp} ) {
  const [email, setEmail] = React.useState<string>("");

  const emailform = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  // add email validation
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{customProp.name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full">
        <DialogHeader>
          <DialogTitle>{customProp.title}</DialogTitle>
          <DialogDescription>{customProp.description}</DialogDescription>
        </DialogHeader>
        <Form {...emailform}>
          <form action="" onSubmit={emailform.handleSubmit(handleSubmit)}>
            <FormField
              control={emailform.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center gap-4">
                  <FormLabel htmlFor="email" className="">
                    Email
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...field}
                    onChange={handleEmailChange}
                  />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit">Reset</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
