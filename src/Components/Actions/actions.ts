import { Selection, SET_CATEGORY } from "./types";

export function setCategory(setcategory: Selection) {
    return {
        type: SET_CATEGORY,
        payload: setcategory
    };
}
