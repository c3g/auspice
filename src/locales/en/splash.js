import React from "react";
import Link from "../../components/framework/link";


export default {
  none: "None",

  title1: "Real-time tracking of Quebec SARS-CoV-2 evolution",
  subtitle1: () => <>
    CoVSeQ is a partnership between
    the <Link url="">Institut National de Sant&eacute; Publique du Qu&eacute;bec (INSPQ)</Link> and
    the <Link url="">McGill Genome Center</Link> to sequence the viral genome of Quebec
    patients with COVID-19 disease. The viral samples are taken from a Quebec viral
    biobank, termed the CoVBanQ, which is hosted in
    the <Link url="">Laboratoire de Sant&eacute; Publique du Qu&eacute;bec (LSPQ)</Link>.
    The website is based on <Link url="">Nextstrain</Link>, an open-source project to
    harness the scientific and public health potential of pathogen genome data. It
    provides powerful analytic and visualization tools to aid epidemiological
    understanding and improve outbreak response.
  </>,
  button1: "Read more",

  availableViews: "Available views",

  title2: "Partnership",
  inspqTitle: "INSPQ",
  inspqText: () => <>
    The Institut de Santé Publique du Québec (INSPQ, Public Health Institut of Quebec is
    XXX As a part of INSPQ, the Laboratoire de Santé Publique du Québec (LSPQ, Public
    Health Laboratory of Quebec) is the reference microbiology laboratory of Québec.
    LSPQ performs specialised analyses for the diagnostic and the surveillance of
    infectious diseases
  </>,
  centreTitle: "McGill Genome Center",
  centreText: () => <>
    MGC is super great and bla bla bla <strong style={{ color: 'red' }}>FIXME</strong>
  </>,
  button2: "Read more about governance",

  title3: "Philosophy",
  pathogenTitle: "Pathogen Phylogenies",
  pathogenText: () => <>
    In the course of an infection and over an epidemic, pathogens naturally accumulate
    random mutations to their genomes. This is an inevitable consequence of error-prone
    genome replication. Since different genomes typically pick up different mutations,
    mutations can be used as a marker of transmission in which closely related genomes
    indicate closely related infections. By reconstructing a phylogeny we can learn about
    important epidemiological phenomena such as spatial spread, introduction timings and
    epidemic growth rate.
  </>,
  actionableTitle: "Actionable Inferences",
  actionableText: () => <>
    However, if pathogen genome sequences are going to inform public health interventions,
    then analyses have to be rapidly conducted and results widely disseminated.
    Current scientific publishing practices hinder the rapid dissemination of
    epidemiologically relevant results. We thought an open online system that
    implements robust bioinformatic pipelines to synthesize data from across research
    groups has the best capacity to make epidemiologically actionable inferences.
  </>,
  button3: "Read more about our workflow and methods",
  covbanqTitle: "CoVBanQ",
  covbanqText: () => <>
    The Coronavirus Banq of Quebec is a biobanq of primary clinical specimen collected by
    Québec hospitals and centralized in INSPQ. Specimen collected are aliquots from
    nasopharyngeal or oropharyngeal swabs, saliva, broncho-alveolar lavage, expectoration,
    tissues or feces. Through a targeted sampling strategy, Public Health Authorities
    prioritize the samples to sequence in order to investigate specific outbreaks.
    @nextstrain.org.
  </>,
  websiteTitle: "This Website",
  websiteText: () => <>
    This website aims to provide a real-time snapshot of evolving pathogen populations in
    Québec and to provide interactive data visualizations to virologists, epidemiologists,
    public health officials and citizen scientists. Through interactive data visualizations,
    we aim to allow exploration of continually up-to-date datasets, providing a novel
    surveillance tool to the scientific and public health communities.
  </>,

  dataTitle: "Data sharing",
  dataText: () => <>
    Short bla bla on data sharing policy <strong style={{ color: 'red' }}>FIXME</strong>
  </>,

  button4: "Read more about data sharing",
};
