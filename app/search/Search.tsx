"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form className="flex gap-3" onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the Search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-slate-600 text-emerald-500 font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
