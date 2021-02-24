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
        <div className="skills">
            <p className="skills__title">Select skills to filter</p>
            <div className='skills__search'>
                { skills.length && <SkillsList skills={skills} addClassToSkillBox="mr-b-l-5"/>}
            </div>
        </div>
    )
}
export default connect(null)(SkilSearch);