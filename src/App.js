import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import FolderList from './Component/FolderList';
import NoteList from './Component/NoteList';
import dummyStore from './Component/dummyStore';

class App extends Component{
  state = { 
    notes: [],
    folders: []
  }
  
  componentDidMount(){
    setTimeout(() => this.setState(dummyStore), 600);
  }
  render() {

    return (
      <main className="App">
        <section className='header'>
          <Header />
        </section>
        <section className='nav'>
          <FolderList />
        </section>
        <section className='main'>
        <NoteList />
        </section>
      </main>
    );
  }
}


export default App;
