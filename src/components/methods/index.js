import React from "react";
import content from "./content.md";

function Methods() {
  return (
    <div
      className="static container markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Methods;
