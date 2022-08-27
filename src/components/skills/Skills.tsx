import React from "react";
import { Heading } from "@chakra-ui/react";
import { skills, Skill } from "./config";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css";

const Skills = () => {
  return(
    <div className="bg-skills">
      <p className="heading">Habilidades</p>
      <p className="text">Tengo experiencia en la implementación de:</p>
      <div className="skill-icons-gird">
        {skills.map((skill: Skill) => {
          return(
            <a key={uuidv4()} href={skill.url} target="_blank">
              <div className="skill">
                <img src={skill.img} alt="Skill logo image" />
              </div>
              <p>{skill.name}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;