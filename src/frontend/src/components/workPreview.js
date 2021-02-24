import React from 'react';
import { Link } from "react-router-dom";
import MiniSkillsList from './miniSkillsList';

/**
 * 
 * @param {Map} work - represented database fields of the model Work
 * 
 * @param {Map} image - represented database fields of the model WorkImage
 */
export default function WorkPreView(props){
    const work = props.work;
    const image = props.image;
    const addAnim = props.addAnim;
    const addClass = props.addClass ? props.addClass : '';
    const skillsNoClicable = props.skillsNoClicable;
    const skillsNoHoverable = props.skillsNoHoverable;
    const str_time = Math.floor(work.done_for / 60)
    let has_image = false;
    // don't know how to do it correctly :c help
    try{
        has_image = image.img;
    } catch {
        has_image = false;
    }
    return(
        <div className={`work-preview ${addClass}`.trim()} style={{animation: addAnim}}>
            <div className="work-preview__image">
                {!has_image ? 'I have no image :с': <img src={image.img} alt=""/>}
            </div>
            <div className="work-preview__info">
                <h4 className="work-preview__title">{work.title}</h4>
                <div className='work-preview__skills'>
                    <MiniSkillsList skills={work.skills} noClickable={skillsNoClicable} noHoverable={skillsNoHoverable}/>
                </div>
                <div className="work-preview__done">Project completed in: {str_time} min.</div>
                <div className="work-preview__link">
                    <Link to={`/portfolio/${work.id}`}>More</Link>
                </div>
            </div>
            
        </div>  
       
    )
}