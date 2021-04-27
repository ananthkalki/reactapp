import React from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import notes from "../notes"

function createNote(notes){
    return(
        <Note key={notes.key} title={notes.title} content={notes.content} />
    );
}

function App (){
 return(
     <div className="app-container">
        <Header />
        <div className="main-section">
            {notes.map(createNote)}   
        </div>
        <Footer />
     </div>
 );
}

export default App;