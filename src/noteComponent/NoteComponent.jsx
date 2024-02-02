import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addGroup, addNote } from '../groupSlice';

import './NoteComponent.css'
import vector from '../assets/Vector.png'
import arrow from '../assets/arrow.png'

const NoteComponent = () => {

    const currDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
const currTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    console.log('currDate', currDate);
    console.log('currTime',currTime)

    const [typedText, setTypedText] = useState('');

    const handleTextareaChange = (event) => {
        const newText = event.target.value;
        setTypedText(newText);
        console.log(typedText)
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault(); // Prevents adding a new line
          if (typedText.trim() !== '' ) {
            handleAddNote(id);
          }
        }
      };


    const { id } = useParams()
    // console.log('id', id)

    const dispatch = useDispatch();
    const groups = useSelector((state) => state.notes.groups);
    const colors = useSelector((state) => state.notes.colors);

    const handleAddNote = (id) => {
        const noteText = typedText;
        if (noteText) {
          dispatch(
            addNote({
                groupId: id,
              note: {
                id: groups[id].length + 1,
                text: noteText,
                date: currDate,
                time: currTime,
              },
            })
          );
        }
    };

    let notes = groups[id]
    console.log(notes)
    const extractLetters = (word) => {
        const words = word.split(' ');

        if (words.length === 1) {
            return words[0].slice(0, 2);
        } else {
            // Combine the first letter of each word for words longer than two
            return words.slice(0, 2).map(w => w.slice(0, 1)).join('');
        }
    };




    
    // console.log(groupdetails)
    return (
        <> 
           

                <div className='note-component'>
                    <div className='navbar'>
                        <Link to='/' className='arrow-back'><img src={arrow} alt="" /></Link>
                        <div className='logo'  style={{ background: `${colors[id]}` }}>
                        {extractLetters(id).toUpperCase()}
                        </div>
                        <div className='groupname'>
                            {id}
                        </div>
                    </div>
                    <div className='notes'>
                        {notes.map((note)=>(

                        <div key={note.id} className='note-container'>
                            <p>{note.text}
                            </p>
                            <p className='date'>
                                <li>{note.date}</li>
                                <li>{note.time}</li>
                            </p>
                        </div>
                        ))}
                      
                    </div>

                    <div className='textarea-wrapper'>
                        <textarea  onChange={handleTextareaChange} onKeyDown={handleKeyDown}  name="" id="" cols="30" rows="" placeholder='Enter your text here...........'></textarea>

                        <img onClick={() =>handleAddNote(id)}  
                        className={typedText.length > 0 ? 'active' : ''} src={vector}
                            alt=""/>
                    </div>
                </div>

        
        </>
    )
}

export default NoteComponent
