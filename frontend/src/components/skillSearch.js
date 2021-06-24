import React, { useEffect} from 'react';
import SkillsList from './skillsList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchAllSkills } from 'redux/actions';

const SkilSearch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllSkills());
    }, [])
    const skills = useSelector(state => {
        return state.skills.all_skills
    });
    return(
        <div className="skills skills_pd">
            { skills.length && <SkillsList skills={skills} addClassToSkillBox="mr-b-l-5"/>}
        </div>
    )
}
export default connect(null)(SkilSearch);