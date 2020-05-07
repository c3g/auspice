import React from "react";
import content from "./content.md";

function Contact() {
  return (
    <div
      className="static container markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Contact;
