import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "Email:",
    info: "joss.vagui@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:joss.vagui@gmail.com",
  },
  {
    name: "LinkedIn:",
    info: "@JosueVagui",
    icon: <AiFillLinkedin className="contact-icon" />,
    url: "https://www.linkedin.com/in/josuevagui/",
  },
  
  {
    name: "GitHub:",
    info: "@jossvagui",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/jossvagui",
  },
  {
    name: "Ubicación:",
    info: "Chiapas, México",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/worldclock/mexico/chiapas",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contáctame</p>
        <p className="text">Si tienes alguna duda o quieres ponerte en contacto conmigo, me encuentras en:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href="mailto:joss.vagui@gmail.com">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Envíame un correo
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;