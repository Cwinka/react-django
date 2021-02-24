import {FETCH_RECENT_WORKS, FETCH_WORKS } from './types';

const initial = {
    works: [],
    recent: []
}

export const worksReducer = (state=initial, action) => {
    switch (action.type){
        case FETCH_WORKS:
            return {...state, works: action.payload};
        case FETCH_RECENT_WORKS:
            return {...state, recent: action.payload};
        default: return state
    }
}