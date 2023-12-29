import { showerUsers } from "@/src/actions/user";
import React from "react";
import SingleUser from "./SingleUser";

const UserList = async () => {
  const users = await showerUsers();


  return <div>
        {
            users !== undefined && users.map((user:IUser, index:number) => <SingleUser key={index} user={user} />)
        }


  </div>;
};

export default UserList;
