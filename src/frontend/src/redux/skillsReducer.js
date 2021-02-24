import {FETCH_ALL_SKILLS, UNSET_SKILL_SELECTED, SET_SKILL_SELECTED} from './types';

const initial = {
    all_skills: [],
    selected_skills: [],
}

export const skillsReducer = (state=initial, action) => {
    switch (action.type){
        case FETCH_ALL_SKILLS:
            return {...state, all_skills: action.payload};
        case SET_SKILL_SELECTED:
            return {...state, selected_skills: state.selected_skills.concat(action.payload)}
        case UNSET_SKILL_SELECTED:
            return {...state,
                selected_skills: state.selected_skills.filter(val => (val.id !== action.payload.id))}
        default: return state;
    }
}