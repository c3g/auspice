import React from "react";
import { withTranslation } from "react-i18next";
import Footer from "../../components/footer";

function Methods({ t }) {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={t('methods:content')}
      />
      <Footer />
    </>
  )
}


export default withTranslation()(Methods);
