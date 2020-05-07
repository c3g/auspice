import React from "react";
import content from "./content.md";

function About() {
  return (
    <div
      className="static container markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}


export default About;
