import React from 'react';
import Skill from './skill';

const SkillsList = (props) => {
    const skills = props.skills;
    const addClassToBox = props.addClassToBox;
    const addClassToSkillBox = props.addClassToSkillBox;
    const addClassToEverySkill = props.addClassToEverySkill;
    const selected = props.selected;
    const noClickable = props.noClickable;
    const hoverDescription = props.hoverDescription;
    return(
        <div className={`skills__list flat_list ${addClassToBox ? addClassToBox: ''}`}>
            {skills.map(skill => (
                <Skill skill={skill}
                key={skill.id}
                addClassToEvery={addClassToEverySkill}
                addClassToBox={addClassToSkillBox}
                selected={selected}
                noClickable={noClickable}
                hoverDescription={hoverDescription}
                />
            ))}
        </div>
    )
}
export default SkillsList;