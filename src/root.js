import React, { lazy, Suspense } from 'react';
import { connect } from "react-redux";
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Monitor from "./components/framework/monitor";
import DatasetLoader from "./components/datasetLoader";
import Spinner from "./components/framework/spinner";
import Head from "./components/framework/head";
import Link from "./components/framework/link";
import NavBar from "./components/navBar";

const Main = lazy(() => import("./components/main"));
const About = lazy(() => import("./components/about"));
const Data = lazy(() => import("./components/data"));
const Methods = lazy(() => import("./components/methods"));
const Primers = lazy(() => import("./components/primers"));
const Contact = lazy(() => import("./components/contact"));
const ResearchGroup = lazy(() => import("./components/researchgroup"));
const Splash = lazy(() => import("./components/splash"));
const Status = lazy(() => import("./components/status"));
const Notifications = lazy(() => import("./components/notifications/notifications"));

const COMPONENT_FOR_URL = {
  "about":         <About/>,
  "contact":       <Contact/>,
  "data-info":     <Data/>,
  "datasetLoader": <DatasetLoader/>,
  "main":          <Main/>,
  "methods":       <Methods/>,
  "primers":       <Primers/>,
  "researchgroup": <ResearchGroup/>,
  "splash":        <Splash/>,
  "status":        <Status/>,
};

const COMPONENT_NOT_FOUND = (
  <div className="container">
    <h1>Error: page not found</h1>
    <p>
      Go <Link url="/">home</Link>
    </p>
  </div>
)

const MainComponentSwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContentContainer = styled.div`
  flex: 1;
  overflow: auto;
`

@connect((state) => ({
  displayComponent: state.general.displayComponent,
  displayNarrative: state.narrative.display,
  narrativeTitle: state.narrative.title,
  browserWidth: state.browserDimensions.browserDimensions.width,
  mobileDisplay: state.browserDimensions.browserDimensions.mobileDisplay,
}))
class MainComponentSwitch extends React.Component {
  render() {
    const isComponentValid = this.props.displayComponent in COMPONENT_FOR_URL
    const component =
      isComponentValid ?
        COMPONENT_FOR_URL[this.props.displayComponent] :
        COMPONENT_NOT_FOUND

    if (!isComponentValid)
      console.error(`reduxStore.general.displayComponent is invalid (${this.props.displayComponent})`);

    return (
      <MainComponentSwitchContainer>
        <NavBar
          mobileDisplay={this.props.mobileDisplay}
          narrativeTitle={this.props.displayNarrative ? this.props.narrativeTitle : false}
        />
        <ContentContainer>
          <Suspense fallback={<Spinner/>}>
            {component}
          </Suspense>
        </ContentContainer>
      </MainComponentSwitchContainer>
    )
  }
}

const Root = () => {
  return (
    <>
      <Head/>
      <Monitor/>
      <Suspense fallback={null}>
        <Notifications/>
      </Suspense>
      <MainComponentSwitch/>
    </>
  );
};

export default hot(Root);
