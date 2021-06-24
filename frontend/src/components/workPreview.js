import React from 'react';
import { Link } from "react-router-dom";
import MiniSkillsList from './miniSkillsList';
import {NO_IMAGE_TEXT, MORE_TEXT, PROJ_COMPLETE_TEXT, PROJ_COMPLETE_TIME_TEXT} from "config";


export default function WorkPreView(props){
    const work = props.work;
    const image = props.image;
    const addAnim = props.addAnim;
    const addClass = props.addClass ? props.addClass : '';
    const skillsNoClicable = props.skillsNoClicable;
    const skillsNoHoverable = props.skillsNoHoverable;
    let has_image = false;
    // don't know how to do it correctly :c help
    try{
        has_image = image.img;
    } catch {
        has_image = false;
    }
    return(
        <div className={`wp ${addClass}`.trim()} style={{animation: addAnim}}>
            <div className="wp--image">
                {!has_image ? NO_IMAGE_TEXT: <img src={image.img} />}
            </div>
            <div className="wp--info wp--info_pd">
                <h4 className="wp--title wp--title_mt">{work.title}</h4>
                <div className='wp--skills wp--skills_mr'>
                    <MiniSkillsList skills={work.skills} noClickable={skillsNoClicable} noHoverable={skillsNoHoverable}/>
                </div>
                <div className="wp--summary wp--summary_mb">
                    <div className="wp--done">{PROJ_COMPLETE_TEXT}: {work.done_for} {PROJ_COMPLETE_TIME_TEXT}.</div>
                    <Link to={`/portfolio/${work.id}`} className="wp--link wp--link_pr">{MORE_TEXT}</Link>
                </div>
            </div>
            
        </div>  
       
    )
}