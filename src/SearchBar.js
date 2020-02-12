import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchBar({ history }) {
  const [text, setText] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    history.push(`/search/${text}`);
  }
  return (
    <div style={{ marginTop: "30px" }}>
      <FaSearch
        style={{ position: "relative", top: "4px", marginRight: "5px" }}
        onClick={handleSearch}
      />
      <form style={{ display: "inline" }} onSubmit={handleSearch}>
        <input onChange={event => setText(event.target.value)} />
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
