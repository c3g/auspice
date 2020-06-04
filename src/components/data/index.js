import React from "react";
import { withTranslation } from "react-i18next";
import Footer from "../../components/footer";

function Data({ t }) {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={t('data:content')}
      />
      <Footer />
    </>
  )
}


export default withTranslation()(Data);
