import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [text, setText] = useState("");
  return (
    <div style={{ marginTop: "40px" }}>
      <FaSearch />
      <input onChange={event => setText(event.target.value)} />
    </div>
  );
}
