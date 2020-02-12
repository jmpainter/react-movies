import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

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
      <h1>
        <Link to="/" style={{ color: "white" }}>
          Wookie Movies
        </Link>
      </h1>
      <SearchBar />
    </div>
  );
}
