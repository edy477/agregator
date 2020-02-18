export interface Selection {
    category: string
    source: string

}
export interface Search{
    keyword:string
}
export const SET_CATEGORY="SET_CATEGORY";
interface setcategory {
    type: typeof SET_CATEGORY;
    payload: Selection;
}

export type SystemActionTypes = setcategory;
