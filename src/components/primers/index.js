import React from "react";
import { withTranslation } from "react-i18next";
import Footer from "../../components/footer";

function Primers({ t }) {
  return (
    <>
      <div
        className="static container markdown"
        dangerouslySetInnerHTML={t('primers:content')}
      />
      <Footer />
    </>
  )
}


export default withTranslation()(Primers);
