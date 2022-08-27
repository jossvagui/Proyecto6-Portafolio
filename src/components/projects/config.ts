import { getSkill, Skill, skills } from "../skills/config"
import Portfolio from "./../../images/portfolio.png";
import Avatar from "./../../images/hardhat-logo.png";
import Crypto from "./../../images/crypto-tracker.png";
import Mobile from "./../../images/wallet.png";
import LandingPage from "./../../images/landingpage.png";
import Crud from "./../../images/crud.png";
import Dashboard from "./../../images/dashboard.png";
import Restaurant from "./../../images/restaurant.png";

export type Project = {
  name: string,
  description: string,
  image: any,
  url: string,
  github: string,
  technologies: Skill[],
}

export const projects: Project[] = [
  
  {
    name: "Landing Page",
    description: "Desarrollo de una Landing para una empresa de marketing digital",
    image: LandingPage,
    url: "https://jossvagui.github.io/Proyecto1-LandingPage/",
    github: "https://github.com/jossvagui/Proyecto1-LandingPage",
    technologies: getSkill(["html", "css", "git"])
  },
  {
    name: "CRUD",
    description: "Aplicación que realiza las 4 operaciones CRUD (crear, leer, actualizar, borrar)",
    image: Crud,
    url: "https://jossvagui.github.io/Proyecto2-CRUD/",
    github: "https://github.com/jossvagui/Proyecto2-CRUD",
    technologies: getSkill(["html", "css", "javascript", "moralis"])
  },
  {
    name: "Dashboard",
    description: "Aplicación que muestra gráficos de las principales criptomonedas mediante el consumo de una API pública.",
    image: Dashboard,
    url: "https://jossvagui.github.io/Proyecto3-Dashboard/",
    github: "https://github.com/jossvagui/Proyecto3-Dashboard",
    technologies: getSkill(["javascript", "npm", "html", "css"])
  },
  {
    name: "Restaurant App",
    description: "Funny blockchain game that prevents you to panic sell your cryptos by locking them in smart contract.",
    image: Restaurant,
    url: "https://proyecto4-restaurant3.netlify.app/",
    github: "https://github.com/jossvagui/Proyecto4-RestaurantApp",
    technologies: getSkill(["react", "javascript", "firebase", "html", "css" ])
  },
  
  {
    name: "Portafolio",
    description: "Portafolio de desarrollador donde se muestran habilidades y reconocimientos",
    image: Portfolio,
    url: "",
    github: "https://github.com/jossvagui/Proyecto6-Portafolio",
    technologies: getSkill(["react", "typescript", "html", "css", "git", "npm"])
  },
  
]