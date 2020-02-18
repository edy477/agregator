
/*
import React, { useState, createContext, useReducer } from 'react'

export const NoteContext = React.createContext();
export const NoteContextDispath =React.createContext();


function addReducer(state, action) {
    switch (action.type) {
        case 'addNote': {
            return {date:state.data,content:state.content }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
    ;


const NotesContextProvider = (props) => {
    const [datenote, setDateNote] = useState({date:""});
    const  [content,setContent] = useState({content:""});
    const [state, dispatch] = React.useReducer(addReducer, {date: "",content:""})

    return (
        <NoteContext.Provider value={state}>
            <NoteContextDispath.Provier value={dispatch}>

            </NoteContextDispath.Provier>
            {props.children}

        </NoteContext.Provider>
    )
}

export default NotesContextProvider;
*/
