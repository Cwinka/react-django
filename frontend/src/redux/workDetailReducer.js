import {FETCH_WORK_DETAILS, FETCH_WORK_IMAGES, CLEAR_WORK_DETAILS } from "./types"

const initial = {
    details: {},
    images: [],
}

export const workDetailsReducer = (state=initial, action) => {
    switch (action.type){
        case FETCH_WORK_DETAILS:
            return {...state, details: action.payload.data};
        case FETCH_WORK_IMAGES:
            return {...state, images: action.payload.data};
        case CLEAR_WORK_DETAILS:
            return initial;
        default: return state
    }
}