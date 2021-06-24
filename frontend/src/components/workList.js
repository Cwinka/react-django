import React from 'react';
import { connect } from 'react-redux';
import WorkPreView from './workPreview'
import {NO_WORKS_FOUND_TEXT} from "config";


const WorksNotFound = () => {
    return(
        <div className="not-found">{NO_WORKS_FOUND_TEXT}</div>
    )
}

const WokrsList = (props) => {
    const works = props.works;
    const images = props.images;
    const addClassToEveryWork = props.addClassToEveryWork;
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
            addClass={addClassToEveryWork}
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