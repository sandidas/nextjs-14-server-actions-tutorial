import React from "react";
import { Button } from "../ui/button";
import DeleteUserForm from "./DeleteUserForm";

interface IProps {
  user: IUser;
}

const SingleUser: React.FC<IProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-12 border-b py-2">
      <div className="col-span-4 capitalize">{user?.name}</div>
      <div className="col-span-5">{user?.email}</div>

      <DeleteUserForm id={user?._id.toString()} />
    </div>
  );
};

export default SingleUser;
