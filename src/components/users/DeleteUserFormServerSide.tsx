import React from "react";
import { Button } from "../ui/button";
import { deleteAUserServerAction } from "@/src/actions/user";
import ActionButton from "./ActionButton";

const DeleteUserFormServerSide = ({ id }: { id: string }) => {
 
    return (
    <form action={deleteAUserServerAction} className="col-span-3">
      <input type="hidden" name="id" value={id} />
      <ActionButton title="Delete" />
    </form>
  );
};

export default DeleteUserFormServerSide;
