import React from "react";
import { Button } from "../ui/button";
import { deleteAUser } from "@/src/actions/user";
import ActionButton from "./ActionButton";

const DeleteUserFormServerSide = ({ id }: { id: string }) => {
 
    return (
    <form action={deleteAUser} className="col-span-3">
      <input type="hidden" name="id" value={id} />
      <ActionButton title="Delete" />
    </form>
  );
};

export default DeleteUserFormServerSide;
