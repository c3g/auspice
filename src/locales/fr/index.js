import language from "./language.json";
import navbar from "./navbar.json";
import sidebar from "./sidebar.json";
import splash from "./splash.js";
import about from "./about.md";
import translation from "./translation.json";

export default {
  language,
  navbar,
  sidebar,
  splash,
  about: { content: { __html: about } },
  translation
};
