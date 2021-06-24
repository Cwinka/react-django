import { combineReducers } from "redux";
import { imagesReducer } from "./imagesReducer";
import { skillsReducer } from "./skillsReducer";
import { worksReducer } from "./worksReducer";
import { workDetailsReducer } from "./workDetailReducer";

export const rootReducer = combineReducers({
    works: worksReducer,
    workDetails: workDetailsReducer,
    work_images: imagesReducer,
    skills: skillsReducer,
})