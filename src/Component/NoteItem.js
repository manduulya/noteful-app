import React  from 'react';
import './NoteItem.css';

export default function NoteItem (props){
        return (
            <li className='note-item'>
                <h1>{props.notes.name}</h1>
            </li>
        )
}

NoteItem.defaultProps = {
    notes: {}
}