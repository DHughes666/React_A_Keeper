import React, { useState } from 'react';

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target
        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault(); 
    }


    return (
        <div>
            <form>
                <input name = "title" 
                    onChange={handleChange}
                    value={note.title}
                    placeholder='Title' 
                />
                <textarea name="content" 
                    onChange={handleChange}
                    rows="3" 
                    value={note.content}
                    placeholder="Take a note..."
                />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;