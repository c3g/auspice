import React from "react";
import styled from 'styled-components';
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

const SplashContent = ({available, dispatch, errorMessage, changePage}) => {

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

      <Title>
        Real-time tracking of Quebec SARS-CoV-2 evolution
      </Title>
      <Paragraph className="text-center" style={{ maxWidth: 640, margin: 'auto' }}>
        CoVSeQ is a partnership between
        the <a href="">Institut National de Sant&eacute; Publique du Qu&eacute;bec (INSPQ)</a> and
        the <a href="">McGill Genome Center</a> to sequence the viral genome of Quebec
        patients with COVID-19 disease. The viral samples are taken from a Quebec viral
        biobank, termed the CoVBanQ, which is hosted in
        the <a href="">Laboratoire de Sant&eacute; Publique du Qu&eacute;bec (LSPQ)</a>.
        The website is based on <a href="">Nextstrain</a>, an open-source project to
        harness the scientific and public health potential of pathogen genome data. It
        provides powerful analytic and visualization tools to aid epidemiological
        understanding and improve outbreak response.
      </Paragraph>
      <ButtonContainer>
        <a href="#philosophy" className="button">
          Read More
        </a>
      </ButtonContainer>
      <Spacer />

      <Title>
        Vues disponibles
      </Title>
      <Views data={available.datasets}/>

      <Title>
        Partnership
      </Title>
      <div className='row'>
        <div className='col-md-6'>
          <Subtitle>
            INSPQ
          </Subtitle>
          <Paragraph>
            The Institut de Santé Publique du Québec (INSPQ, Public Health Institut of Quebec is
            XXX As a part of INSPQ, the Laboratoire de Santé Publique du Québec (LSPQ, Public
            Health Laboratory of Quebec) is the reference microbiology laboratory of Québec.
            LSPQ performs specialised analyses for the diagnostic and the surveillance of
            infectious diseases
          </Paragraph>
        </div>
        <div className='col-md-6'>
          <Subtitle>
            McGill Genome Center
          </Subtitle>
          <Paragraph>
            MGC is super great and bla bla bla <strong style={{ color: 'red' }}>FIXME</strong>
          </Paragraph>
        </div>
      </div>
      <ButtonContainer>
        <a href="#FIXME" className="button">
          Read more about governance
        </a>
      </ButtonContainer>
      <Spacer />

      <Title id="philosophy">
        Philosophy
      </Title>
      <div className="row">
        <div className="col-md-6">
          <Subtitle>
            Pathogen Phylogenies
          </Subtitle>
          <Paragraph>
            In the course of an infection and over an epidemic, pathogens naturally accumulate
            random mutations to their genomes. This is an inevitable consequence of error-prone
            genome replication. Since different genomes typically pick up different mutations,
            mutations can be used as a marker of transmission in which closely related genomes
            indicate closely related infections. By reconstructing a phylogeny we can learn about
            important epidemiological phenomena such as spatial spread, introduction timings and
            epidemic growth rate.
          </Paragraph>
        </div>
        <div className="col-md-6">
          <Subtitle>
            Actionable Inferences
          </Subtitle>
          <Paragraph>
            However, if pathogen genome sequences are going to inform public health interventions,
            then analyses have to be rapidly conducted and results widely disseminated.
            Current scientific publishing practices hinder the rapid dissemination of
            epidemiologically relevant results. We thought an open online system that
            implements robust bioinformatic pipelines to synthesize data from across research
            groups has the best capacity to make epidemiologically actionable inferences.
          </Paragraph>
        </div>
      </div>
      <ButtonContainer>
        <Link url="/methods" className="button">
          Read more about our workflow and methods
        </Link>
      </ButtonContainer>
      <div className="row">
        <div className="col-md-6">
          <Subtitle>
            CoVBanQ
          </Subtitle>
          <Paragraph>
            The Coronavirus Banq of Quebec is a biobanq of primary clinical specimen collected by
            Québec hospitals and centralized in INSPQ. Specimen collected are aliquots from
            nasopharyngeal or oropharyngeal swabs, saliva, broncho-alveolar lavage, expectoration,
            tissues or feces. Through a targeted sampling strategy, Public Health Authorities
            prioritize the samples to sequence in order to investigate specific outbreaks.
            @nextstrain.org.
          </Paragraph>
        </div>
        <div className="col-md-6">
          <Subtitle>
            This Website
          </Subtitle>
          <Paragraph>
            This website aims to provide a real-time snapshot of evolving pathogen populations in
            Québec and to provide interactive data visualizations to virologists, epidemiologists,
            public health officials and citizen scientists. Through interactive data visualizations,
            we aim to allow exploration of continually up-to-date datasets, providing a novel
            surveillance tool to the scientific and public health communities.
          </Paragraph>
        </div>
      </div>
      <Spacer />

      <Title>
        Data sharing
      </Title>
      <Paragraph>
        Short bla bla on data sharing policy <strong style={{ color: 'red' }}>FIXME</strong>
      </Paragraph>
      <ButtonContainer>
        <Link url="/data-info" className="button">
          Read more about data sharing
        </Link>
      </ButtonContainer>
      <Spacer />

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

function preventDefault(fn, ...args) {
  return (ev) => {
    ev.preventDefault()
    fn(...args)
  }
}

export default SplashContent;
