import React from "react";
import { Input } from "reactstrap";
import "../style/search.css";


const Search = ({ handle }) => {
  return (
    <div className="sb">
      <Input
        style={{ width: "30%", height: "10vh" , }}
 
        type="text"
        placeholder="enter the title you search..."
        onChange={handle}
      />
    </div>
  );
};

export default Search;
