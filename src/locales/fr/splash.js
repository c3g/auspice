import React from "react";
import Link from "../../components/framework/link";


export default {
  none: "Aucune",

  title1: "Surveillance en temps réel de l’évolution des SARS-CoV-2 au Québec",
  subtitle1: () => <>
    CoVSeQ est un partenariat entre 
    l’<Link url="https://www.inspq.qc.ca/">Institut National de Santé Publique du Québec (INSPQ)</Link> et
    Le <Link url="http://www.mcgillgenomecentre.org/">Centre Génomique de McGill </Link> pour le séquençage du génome viral de patients malade de la COVID-19. Les échantillons viraux proviennent de la biobanque virale du Québec (CoVBanQ) hébergée au <Link url="https://www.inspq.qc.ca/lspq">Laboratoire de Santé Publique du Québec (LSPQ)</Link>.
    Ce site web est basé sur <Link url="https://nextstrain.org/">Nextstrain</Link>, un projet <i>open-source</i> permettant d’exploiter le potentiel scientifique et pour la santé publique des données génomiques de pathogènes. Il propose un environnement puissant pour l’analyse et la visualisation de données génomiques permettant une meilleure compréhension de la situation épidémiologique et une meilleure réponse aux éclosions.
  </>,
  button1: "En savoir plus",

  availableViews: "Vues disponibles",

  websiteTitle: "Ce site web",
  websiteText: () => <>
    Ce site web donne un aperçu en temps réel de l’évolution de la population de SRAS-CoV-2 au Québec et propose une visualisation interactive des données pour les virologistes, les épidémiologistes, les professionnels de santé publique et les scientifiques. Grace à ces fonctionnalités avancées, nous souhaitons faciliter l’exploration des données au fur et à mesure de leur mise à jour et proposer un nouvel outil de surveillance pour les autorités de santé publique et la communauté scientifique.
  </>,


  title3: "Philosophie",
  pathogenTitle: "Phylogénie des pathogènes",
  pathogenText: () => <>
  "Au cours d’une infection, les pathogènes accumulent naturellement des mutations dans leurs génomes. 
  Ceci est une conséquence inévitable de la réplication imparfaite de leur génome. 
  Comme les erreurs vont être différentes d’une fois à l’autre, ceci sera utilisé comme un marqueur de la transmission 
  car des  génomes aux séquences proches (avec peu de mutations de différence) révèlent des infections reliées. 
  En reconstruisant la phylogénie (le lien de parenté entre les virus), 
  nous pouvons ainsi détecter des phénomènes épidémiologiques tels que la diffusion géographique des isolats, 
  dater leur introduction et mesurer la croissance de l’épidémie."
   Traduction d'un texte issu de Nextstrains.
  </>,
  actionableTitle: "De l'inférence à l'action",
  actionableText: () => <>
    "Pour que la séquence génomique des pathogènes puisse guider les interventions en Santé Publique, 
  les analyses doivent être conduites rapidement et les résultats largement disséminés. 
Les pratiques actuelles de publication scientifique empêchent la dissémination rapide des résultats épidémiologiques pertinents. 
  Nous pensons qu'un système en ligne ouvert qui implémente des pipelines bioinformatiques robustes permettant de synthétiser 
  l'informations entre les groupes de recherche a le plus de potentiel pour passer rapidement de l'inférence épidémiologique à l'action."
  Traduction d'un texte issu de Nextstrains.
  </>,
  button3: "En apprendre d'avantage sur nos méthodes",

};
