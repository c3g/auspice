import React from "react";
import content from "./content.md";

function Data() {
  return (
    <div
      className="static container markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Data;
