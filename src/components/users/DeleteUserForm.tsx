"use client";

import React from "react";
import { Button } from "../ui/button";
import { deleteAUser } from "@/src/actions/user";
import ActionButton from "./ActionButton";
import toast from "react-hot-toast";

const DeleteUserForm = ({ id }: { id: string }) => {
  const handleDeleteUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const confirmation = window.confirm("Are you sure you want to delete this user?");
    console.log("confirmation", confirmation);
    if (confirmation) {
      const response = await deleteAUser(id);
      if (response?.error) {
        toast.error(response?.error);
      } else {
        toast.success("Delete user successfully");
      }
    }
  };

  return (
    <form onSubmit={(e) => handleDeleteUser(e)} className="col-span-3">
      <input type="hidden" name="id" value={id} />
      <ActionButton title="Delete" />
    </form>
  );
};

export default DeleteUserForm;
