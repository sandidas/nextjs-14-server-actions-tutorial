import React from "react";
import DeleteUserForm from "./DeleteUserForm";
import Link from "next/link";

interface IProps {
  user: IUser;
}

const SingleUser: React.FC<IProps> = ({ user }) => {

  const userInfo = user && JSON.parse(JSON.stringify(user));

  return (
    <div className="grid grid-cols-12 border-b py-2 gap-5">
      <div className="col-span-6 flex flex-col">
        <div> {userInfo?.name}</div>
        <div className="text-xs text-slate-400">{userInfo?.email}</div>
        <div className="text-xs text-slate-400">{userInfo?._id}</div>
      </div>
      <div className="col-span-3">
        <Link href={`user/${userInfo?._id}`} className="bg-slate-900 text-white p-2 w-full flex items-center justify-center text-center rounded-md shadow-md hover:shadow-xl hover:bg-slate-700">Edit</Link>
      </div>
      <DeleteUserForm id={userInfo?._id} />
    </div>
  );
};

export default SingleUser;
