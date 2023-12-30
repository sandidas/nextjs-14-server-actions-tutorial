import { showUsers } from "@/src/actions/user";
import React from "react";
import SingleUser from "./SingleUser";

const UserList = async ({ search }: { search: string | undefined }) => {


  const users = await showUsers({search});



  return <div className="p-5 bg-slate-100">{users !== undefined && users.map((user: IUser, index: number) => <SingleUser key={index} user={user} />)}</div>;
};

export default UserList;
