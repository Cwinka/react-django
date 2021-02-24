import { combineReducers } from "redux";
import { imagesReducer } from "./imagesReducer";
import { skillsReducer } from "./skillsReducer";
import { worksReducer } from "./worksReducer";

export const rootReducer = combineReducers({
    works: worksReducer,
    work_images: imagesReducer,
    skills: skillsReducer,
})