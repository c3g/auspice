import language from "./language.json";
import navbar from "./navbar.json";
import sidebar from "./sidebar.json";
import splash from "./splash.js";
import about from "./about.md";
import data from "./data.md";
import methods from "./methods.md";
import contact from "./contact.md";
import primers from "./primers.md";
import translation from "./translation.json";

export default {
  language,
  navbar,
  sidebar,
  splash,
  about: { content: { __html: about } },
  data: { content: { __html: data } },
  methods: { content: { __html: methods } },
  contact: { content: { __html: contact } },
  primers: { content: { __html: primers } },
  translation
};
