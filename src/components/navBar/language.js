import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import i18n from "i18next";

import { analyticsControlsEvent } from "../../util/googleAnalytics";
import { CHANGE_LANGUAGE } from "../../actions/types";

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`

@connect((state) => {
  return {
    metadata: state.metadata,
    language: state.general.language
  };
})
class Language extends React.Component {

  componentWillMount() {
    i18n.changeLanguage(this.props.language);
  }

  changeLanguage(language) {
    analyticsControlsEvent("change-language");
    i18n.changeLanguage(language);
    this.props.dispatch({ type: CHANGE_LANGUAGE, data: language });
  }

  render() {
    const { language } = this.props;
    const otherLanguageValue = language === 'en' ? 'fr' : 'en'
    const otherLanguageLabel = language === 'en' ? 'Français' : 'English'

    return (
      <Button
        onClick={() => this.changeLanguage(otherLanguageValue)}
      >
        {otherLanguageLabel}
      </Button>
    );
  }
}

export default Language;
