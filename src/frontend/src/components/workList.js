import React from 'react';
import { connect } from 'react-redux';
import WorkPreView from './workPreview'


const WorksNotFound = () => {
    return(
        <div className="works-preview__not-found">No works found</div>
    )
}

/**
 * Array of Map's
 * @param {Array} works - represented a list of maps contain database fields of a model Work
 * 
 * Map of images
 * @param {Map} images - represented {work_id: image} structure.
 * Image is map of a database fields of the model Image
 */
const WokrsList = (props) => {
    const works = props.works;
    const images = props.images;
    const sel_sk_ids = props.selected_skills.map(sk => sk.id);

    function hasSelectedSkills(work){
        if (!sel_sk_ids.length){return true}
        const skills = work.skills;
        const hasSk = skills.filter(sk => {
            return sel_sk_ids.indexOf(sk.id) !== -1;
        })
        if (sel_sk_ids.length == hasSk.length){
            return true;
        }
    }
    const worksPreview = works.map(work => (
        hasSelectedSkills(work) &&
        <WorkPreView
            key={work.id}
            work={work}
            image={images[work.id]}
            />
    ))
    const thereAreWorks = worksPreview.some(work => (work !== undefined))
    return(
        thereAreWorks ? worksPreview : <WorksNotFound/>
    )
}
const mapStateToProps = state => ({
    selected_skills: state.skills.selected_skills,
})  
export default connect(mapStateToProps)(WokrsList);