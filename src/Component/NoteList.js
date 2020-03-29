import React from 'react';
import NoteItem from './NoteItem'
import './NoteList.css'

export default function NoteList (props) {
        return (
            <section className="note-list">
                <ul>
                    {props.notes.map (( note, i) => 
                            <NoteItem 
                                key={i}
                                id={note.id}
                                name={note.name}
                                modified={note.modified}/>
                        
                    )}
                </ul>
            </section>
        )
}

NoteList.defaultProps = {
    notes: [],
  }
  