"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const UserSearch = ({ search }: { search?: string }) => {
  const [searchKeyword, setSearchKeyword] = useState(search || undefined);
  const [formSubmitted, setFormSubmitted] = useState(true);
  const router = useRouter();

  //console.log("formSubmitted", formSubmitted);

  useEffect(() => {
    if (formSubmitted && searchKeyword !== undefined) {
      router.push(`/user?search=${searchKeyword}`);
    } else {
      router.push(`/user`);
    }
  }, [searchKeyword, formSubmitted, router]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const keyword = formData.get("keyword") as string;
    setSearchKeyword(keyword);

    setFormSubmitted(true);
    // setRefetch(true);
  };

  const handleResetSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFormSubmitted(false);
    setSearchKeyword("");
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)} className="flex gap-5 border bg-slate-200 p-5">
        <div className="relative w-full">
          <Input defaultValue={searchKeyword} type="text" name="keyword" id="" />
          {formSubmitted && (
            <Button className="absolute right-0 top-0" onClick={(e) => handleResetSearch(e)} type="reset">
              X
            </Button>
          )}
        </div>

        {/* <Input value={searchKeyword} onChange={(e) => {setSearchKeyword(e.target.value)}} type="text" name="searchKeyword" id="" /> */}

        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default UserSearch;
