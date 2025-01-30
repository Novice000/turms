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
import { Label } from "@/components/ui/label";

export function ResendDialog() {
  const [email, setEmail] = React.useState<string>("");

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
        <Button variant="outline">Resend Activation Email</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Email Activation</DialogTitle>
          <DialogDescription>Resend Email Activation</DialogDescription>
        </DialogHeader>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              className="col-span-3"
              onChange={handleEmailChange}
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Resend</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResendDialog;
