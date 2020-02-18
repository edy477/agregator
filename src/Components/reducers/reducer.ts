import {Selection, SET_CATEGORY, SystemActionTypes} from "../Actions/types";
import {act} from "react-dom/test-utils";

const initialState: Selection = {
   category: "",
    source:" "
};

export function catReducer(
    state = initialState,
    action: SystemActionTypes
): Selection {
    switch (action.type) {
        case SET_CATEGORY:

            return{
                category:action.payload.category,
               source:action.payload.source

            };

        default:
            return state;
    }
}
