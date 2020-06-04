import React from "react";
import { withTranslation } from "react-i18next";
import Footer from "../../components/footer";

function About({ t }) {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={t('about:content')}
      />
      <Footer />
    </>
  )
}


export default withTranslation()(About);
