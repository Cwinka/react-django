import PortfolioService from 'components/middleware/portfolioservice';
import {FETCH_WORKS, FETCH_MID_IMAGES, FETCH_ALL_SKILLS, FETCH_BIG_IMAGES, FETCH_PREVIEW_IMAGES, SET_SKILL_SELECTED, UNSET_SKILL_SELECTED, FETCH_RECENT_WORKS} from './types';

const ports = new PortfolioService();

async function commonAsyncDispatch( disp, type, action ){
    const response = await action();
    disp({type: type, payload: response.data})
}
export function fetchWorks(){
    return async dispatch => {
        commonAsyncDispatch(dispatch, FETCH_WORKS, ports.getWorksList);
    }
}
export function fetcRecenthWorks(){
    return async dispatch => {
        commonAsyncDispatch(dispatch, FETCH_RECENT_WORKS, ports.getRecentWorksList);
    }
}
export function fetchAllSkills(){
    return async dispatch => {
        commonAsyncDispatch(dispatch, FETCH_ALL_SKILLS, ports.getAllSkills);
    }
}
export function fetchPreviewImages(s){
    switch (s){
        case 'small':
            return fetchSmallImages(true, FETCH_PREVIEW_IMAGES);
        case 'mid':
            return fetchMidImages(true, FETCH_PREVIEW_IMAGES);
        case 'big':
            return fetchBigImages(true, FETCH_PREVIEW_IMAGES);
        default: return fetchMidImages(true, FETCH_PREVIEW_IMAGES);
    }
}
export function fetchSmallImages(isOnlyFirs=false, type=FETCH_MID_IMAGES){
    return async dispatch => {
        commonAsyncDispatch(dispatch, type, () => ports.getSizedImages('small', isOnlyFirs));
    }
}
export function fetchMidImages(isOnlyFirs=false, type=FETCH_MID_IMAGES){
    return async dispatch => {
        commonAsyncDispatch(dispatch, type, () => ports.getSizedImages('mid', isOnlyFirs));
    }
}
export function fetchBigImages(isOnlyFirs=false, type=FETCH_BIG_IMAGES){
    return async dispatch => {
        commonAsyncDispatch(dispatch, type, () => ports.getSizedImages('big', isOnlyFirs));
    }
}
export function setSkillSelected(skill_name){
    return {
        type: SET_SKILL_SELECTED,
        payload: skill_name,
    }
}
export function unsetSkillSelected(skill_name){
    return {
        type: UNSET_SKILL_SELECTED,
        payload: skill_name,
    }
}