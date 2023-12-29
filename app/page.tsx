import NewUserForm from "@/src/components/users/NewUserForm";
import UserList from "@/src/components/users/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-black text-center">USER REGISTRATION</h1>
      <NewUserForm />
      <UserList />
    </main>
  );
}
