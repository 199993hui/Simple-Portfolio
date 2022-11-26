import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";
import { skillsImage } from '../../utils/skillsImage'

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                {/* <span
                      className="iconify"
                      data-icon={skills.classname}
                      style={skills.style}
                      data-inline="false"
                    ></span> */}
                    <img src={skillsImage(skills.skillName)} alt={skills.skillName} height={50} width={50} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
