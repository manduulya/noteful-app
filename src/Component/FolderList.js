import React, { Component } from 'react';
import FolderItem from './FolderItem'
import './FolderList.css';


class FolderList extends Component {
    render() {
        return (
            <section className="folders">
                <ul>
                    <FolderItem />
                    <FolderItem />
                    <FolderItem />
                </ul>
            </section>
        )
    }
}

export default FolderList;