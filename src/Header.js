import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid grey"
      }}
    >
      <h1>Wookie Movies</h1>
      <SearchBar />
    </div>
  );
}
