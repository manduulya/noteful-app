import React, { Component } from 'react';
import NoteItem from './NoteItem'
import './NoteList.css'

class NoteList extends Component {
    render() {
        return (
            <section className="note-list">
                <ul>
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                </ul>
            </section>
        )
    }

}
export default NoteList; 