import NewUserForm from "@/src/components/users/NewUserForm";
import UserList from "@/src/components/users/UserList";
import UserSearch from "@/src/components/users/UserSearch";

export default function Home({ searchParams }: { searchParams: { search: string | undefined } }) {
  const search = typeof searchParams?.search === "string" ? searchParams?.search : undefined;
  // console.log('search', search)
  // http://localhost:3000/user?search=user-name

  return (
    <main>
      <h1 className="text-3xl font-black text-center">USER REGISTRATION</h1>
      <NewUserForm />
      <UserSearch search={search} />
      <UserList search={search} />
    </main>
  );
}
