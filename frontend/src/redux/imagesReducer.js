import {FETCH_SMALL_IMAGES, FETCH_MID_IMAGES, FETCH_BIG_IMAGES, FETCH_PREVIEW_IMAGES} from './types';

const initial = {
    preview_images: {},
    small_images: [],
    mid_images: [],
    big_images: [],
}

export const imagesReducer = (state=initial, action) => {
    switch (action.type){
        case FETCH_SMALL_IMAGES:
            return {...state, small_images: action.payload}
        case FETCH_MID_IMAGES:
            return {...state, mid_images: action.payload}
        case FETCH_BIG_IMAGES:
            return {...state, big_images: action.payload}
        case FETCH_PREVIEW_IMAGES:
            return {...state, preview_images: action.payload}
        default: return state;
    }
}