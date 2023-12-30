import { getUserById } from "@/src/actions/user";
import UpdateUserForm from "@/src/components/users/UpdateUserForm";
import React from "react";

const EditUserPage = async ({ params }: { params: { userId: string } }) => {
  const id = params?.userId as string;
  const userInformation = await getUserById(id);
  const user = userInformation && JSON.parse(JSON.stringify(userInformation));

  return (
    <div>
      <h1 className="text-3xl font-black text-center">USER EDIT</h1>

      {userInformation && <UpdateUserForm user={user} />}
    </div>
  );
};

export default EditUserPage;
