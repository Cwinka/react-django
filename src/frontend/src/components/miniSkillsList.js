import React from 'react';
import SkillsList from './skillsList';


const MiniSkillsList = (props) =>  {
    const skills = props.skills;
    const noClickable = props.noClickable ? true: false;
    const noHoverable = props.noHoverable ? 'no-pointable': '';
    return(
        <SkillsList skills={skills}
            noClickable={noClickable}
            addClassToBox="mini-skills"
            addClassToSkillBox={`mini-skills__box ${noHoverable}`.trim()}
            addClassToEverySkill="mini-skills__item"/>
    )
}

export default (MiniSkillsList);

