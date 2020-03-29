import React  from 'react';
import './NoteItem.css';

function NoteItem (props){
        return (
            <li className='note-item'>
                <h1>{props.notes}</h1>
                <p>Date modified on 3rd Jan 2019</p>
                <button>Delete Note</button>
            </li>
        )
}

export default NoteItem;