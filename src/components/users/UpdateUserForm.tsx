"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { updateUser } from "@/src/actions/user";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

interface IProps {
  user: IUser;
}
const UpdateUserForm:React.FC<IProps> = ({user}) => {
  const ref = useRef<HTMLFormElement>(null);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  return (
    <div>
      <form
        ref={ref}
        action={async (formData: FormData) => {
          const response = await updateUser(formData);
          if (response?.error) {
            toast.error(response.error);
          } else {
            toast.success("User updated successfully");
            ref.current?.reset();
          }
        }}
        className="flex flex-col gap-5 border p-5 shadow-lg bg-white my-10"
      >
        <input type="hidden" name="id" value={user?._id} />
        <label htmlFor="">Your Name</label>
        <Input value={name} onChange={(e)=>setName(e.target.value)} required type="text" name="name" id="" />
        <label htmlFor="">Your Email</label>
        <Input value={email}  onChange={(e)=>setEmail(e.target.value)} required type="email" name="email" id="" />
        <ActionButton title="Update" />
      </form>
    </div>
  );
};

export default UpdateUserForm;
