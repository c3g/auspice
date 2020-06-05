import React from "react";
import styled from 'styled-components';
import Flex from "../../components/framework/flex";

const FooterContainer = styled.div`
  margin-bottom: 6rem;
`

const widthLarge = 140
const widthDefault = 0.6 * widthLarge

const Footer = () => (
  <FooterContainer className="container">
    <hr />
    <div className="row">
      <div className="col-md-12">
        <Flex wrap="wrap" style={{marginTop: 20, justifyContent: "space-around"}}>
          <a href="https://www.inspq.qc.ca/" target="_blank" rel="noreferrer noopener">
            <img width={widthLarge} src={require("../../images/inspq.jpg")}/>
          </a>
          <a href="http://www.mcgillgenomecentre.org/" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/Genome_logo.png")}/>
          </a>
          <a href="http://www.computationalgenomics.ca/" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/c3g_source.png")}/>
          </a>
          <a href="https://www.inspq.qc.ca/lspq" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/lspq.jpeg")}/>
          </a>
          <a href="https://www.calculquebec.ca/" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/CalculQuebec_logo_medium.png")}/>
          </a>
          <a href="https://www.mcgill.ca/" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/Mcgill_Logo.png")}/>
          </a>
          <a href="https://www.umontreal.ca/" target="_blank" rel="noreferrer noopener">
            <img width={widthDefault} src={require("../../images/UdeM-officiel-RVB.png")}/>
          </a>
        </Flex>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
