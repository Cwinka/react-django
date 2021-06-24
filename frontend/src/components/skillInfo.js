import React from 'react'


const SkillInfo = (props) => {
    const skill = props.skill;
    return(
        <div className="card skill-card">
            <div className="card-body text-dark">
                <h5 className="card-title">{skill.name}</h5>
                <p className="card-text">{skill.description}</p>
                <p className='card-text'>Knowledge {skill.knowledge}/10</p>
            </div>
        </div>
    )
}

export const SkillInfoLeft = (props) => {
    return (
        <div className="skills-info left">
            <div className="skills-info__left">
                <div className='skills-info__content'>
                    {props.skills.map(skill => (
                        <SkillInfo skill={skill} key={skill.id}/>
                    ))}
                </div>  
            </div>
        </div>
    )
}
export const SkillInfoRight = (props) => {
    return (
        <div className="skills-info right">
            <div className="skills-info__right">
                {props.skills.map(skill => (
                    <SkillInfo skill={skill} key={skill.id}/>
                ))}
            </div>
        </div>
    )
}