import React, { useState } from "react";
import { Heading, Text, Button, CloseButton } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsChevronDown } from "react-icons/bs";
import { FaDiscord  } from "react-icons/fa";
import avatar from "./../../images/hi.png";
import "./About.css";


const About = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const hide = () => setIsVisible(false);

  const getFontSize = () => {
    let width = window.innerWidth;
    if(width < 450) return "5rem";
    if(width < 1250) return "6rem";
    return "8rem";
  }

  const getAlertSize = () => {
    let width = window.innerWidth;
    if(width < 1275) return "md";
    return "lg";
  }

  /*const Alert = () => {
    if(isVisible) {
      return(
        <div className="alert">
          <Heading as="h3" size={getAlertSize()}>💻{"   "}<a href="mailto:contactme@tijan.dev" className="contact-link">Hire Me!</a></Heading>
          <CloseButton size='lg' className="close-btn" onClick={() => hide()} />
        </div>
      )
    }else{
      return null
    }
  }*/

  return(
    <>
    
    <div className="bg">
      <div className="about-wrapper">
        <div className="about-text">
          <div className="about-title">
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Hola! 👋
            </Heading>
            <Heading as='h1' fontSize={getFontSize()} size='4xl'>
              Soy <span className="name">Josué</span>
            </Heading>
          </div>
          <div className="about-text-desc">
            <Text fontSize='3xl'>apasionado<span className="name"> desarrollador FULL-STACK </span> de México con 1 año de experiencia en proyectos Front-End y Back-End. Estoy siempre emocionado por aprender algo nuevo cada día y contribuir a la industria de programación.</Text>
          </div>

          <div className="icons">
            <a href="https://github.com/jossvagui" target="_blank">
              <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/josuevagui/" target="_blank">
              <AiFillLinkedin className="icon" />
            </a>            
          </div>

          <a href="mailto:joss.vagui@gmail.com">
            <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid'>
              Contact Me
            </Button>
          </a>
        </div>
        <div className="about-avatar">
          <img src={avatar} className="avatar" alt="Perfil" />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="bottom-icon">
          <BsChevronDown />
        </div>
      </div>
    </div>
    </>
  )  
}

export default About;