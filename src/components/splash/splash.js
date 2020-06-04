import React from "react";
import styled from 'styled-components';
import { withTranslation } from "react-i18next";
import Flex from "../../components/framework/flex";
import Link from "../../components/framework/link";
import Footer from "../../components/footer";

const CenterContent = ({ children }) => (
  <div className="row">
    <div className="col-md-1"/>
    <div className="col-md-10">
      <Flex wrap="wrap" style={{marginTop: 20, justifyContent: "space-around"}}>
        {children}
      </Flex>
    </div>
    <div className="col-md-1"/>
  </div>
);

const ErrorMessage = ({ message }) => (
  <CenterContent>
    <div>
      <p style={{color: "rgb(222, 60, 38)", fontWeight: 600, fontSize: "24px"}}>
        {"😱 404, or an error has occured 😱"}
      </p>
      <p style={{color: "rgb(222, 60, 38)", fontWeight: 400, fontSize: "18px"}}>
        {`Details: ${message}`}
      </p>
      <p style={{fontSize: "16px"}}>
        {"If this keeps happening, or you believe this is a bug, please "}
        <a href={"mailto:hello@nextstrain.org"}>{"get in contact with us."}</a>
      </p>
    </div>
  </CenterContent>
);

const HeaderTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 105px;
  letter-spacing: 1.5rem;
`

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 38px;
  font-weight: 300;
`

const Subtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Spacer = styled.hr`
  border: none;
  margin-tom: 0rem;
  margin-bottom: 4rem;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  padding: 0 100px;
  margin-top: 4rem;
  margin-bottom: 6rem;
`

const Card = styled.div`
  color: white;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 0.5em;
  width: 60%;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const Header = () => (
  <Flex justifyContent="center">
    <div style={{paddingRight: "40px"}}>
      <HeaderTitle>
        <span style={{ color: '#4377CD' }}>C</span>
        <span style={{ color: '#5097BA' }}>o</span>
        <span style={{ color: '#7CB879' }}>V</span>
        <span style={{ color: '#D4B13F' }}>S</span>
        <span style={{ color: '#E49938' }}>e</span>
        <span style={{ color: '#E67030' }}>Q</span>
      </HeaderTitle>
    </div>
    <img
      alt="logo"
      style={{ width: 200 }}
      src={
        require("../../images/VisuelCoronavirus-ms.jpg") // eslint-disable-line global-require
      }
    />
  </Flex>
);

const SplashContent = ({available, dispatch, errorMessage, changePage, t}) => {

  const Views = ({data}) => (
    data ? (
      <CardContainer>
        {data.map((d) => (
          <Card
            key={d.request}
            onClick={() => dispatch(changePage({path: d.request, push: true}))}
          >
            {d.request}
          </Card>
        ))}
      </CardContainer>
    ) : (
      <p>Aucune</p>
    )
  );

  const Content = () => (
    <>

      <Title style={{ maxWidth: 800, margin: '0 auto 0.5em', lineHeight: 1.2 }}>
        {t('splash:title1')}
      </Title>
      <Paragraph className="text-center" style={{ maxWidth: 640, margin: 'auto' }}>
        {t('splash:subtitle1')}
      </Paragraph>
      <ButtonContainer>
        <a href="#philosophy" className="button">
          {t('splash:button1')}
        </a>
      </ButtonContainer>
      <Spacer />

      <Title>
        {t('splash:availableViews')}
      </Title>
      <Views data={available.datasets}/>

      <Title>
        {t('splash:websiteTitle')}
      </Title>
      <Paragraph>
        {t('splash:websiteText')}
      </Paragraph>
      <Spacer />

      <Title id="philosophy">
        {t('splash:title3')}
      </Title>
      <div className="row">
        <div className="col-md-6">
          <Subtitle>
            {t('splash:pathogenTitle')}
          </Subtitle>
          <Paragraph>
            {t('splash:pathogenText')}
          </Paragraph>
        </div>
        <div className="col-md-6">
          <Subtitle>
            {t('splash:actionableTitle')}
          </Subtitle>
          <Paragraph>
            {t('splash:actionableText')}
          </Paragraph>
        </div>
      </div>
      <ButtonContainer>
        <Link url="/methods" className="button">
          {t('splash:button3')}
        </Link>
      </ButtonContainer>

    </>
  );

  return (
    <div className="container">
      <Header/>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <Content />
      <Footer/>
    </div>
  );
};

export default withTranslation()(SplashContent);
