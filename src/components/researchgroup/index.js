import React from "react";
import content from "./content.md";
import Footer from "../../components/footer";

function ResearchGroup() {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Footer />
    </>
  )
}


export default ResearchGroup;
