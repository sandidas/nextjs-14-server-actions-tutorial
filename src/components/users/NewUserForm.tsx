"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";
import { createNewUser } from "@/src/actions/user";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

const NewUserForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={ref}
        action={async (formData: FormData) => {
          const response = await createNewUser(formData);
          if (response?.error) {
            toast.error(response.error);
          } else {
            toast.success("User created successfully");
            ref.current?.reset();
          }
        }}
        className="flex flex-col gap-5 border p-5 shadow-lg bg-white my-10"
      >
        <label htmlFor="">Your Name</label>
        <Input required type="text" name="name" id="" />
        <label htmlFor="">Your Email</label>
        <Input required type="email" name="email" id="" />
        <ActionButton title="Submit" />
      </form>
    </div>
  );
};

export default NewUserForm;
