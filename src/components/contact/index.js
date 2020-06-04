import React from "react";
import { withTranslation } from "react-i18next";
import Footer from "../../components/footer";

function Contact({ t }) {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={t('contact:content')}
      />
      <Footer />
    </>
  )
}


export default withTranslation()(Contact);
