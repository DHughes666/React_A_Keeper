import React from "react";

import Header from './Header.jsx';
import Note from './Note.jsx';
import Footer from './Footer.jsx';
import notes from "../notes.js";

function createNote(noteItem){
    return (
        <Note 
            title={noteItem.title} 
            content = {noteItem.content} 
        />
    )
}


function App() {
    return <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
    </div>
}

export default App;