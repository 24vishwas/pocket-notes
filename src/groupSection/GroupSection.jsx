import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GroupSection.css'
import Popup from '../popup/Popup';
import NoteComponent from '../noteComponent/NoteComponent';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const GroupSection = () => {

    const dispatch = useDispatch();
    const groups = useSelector((state) => state.notes.groups);
    const colors = useSelector((state) => state.notes.colors);
    // popUp
    const [isFormOpen, setFormOpen] = useState(false);
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    const extractLetters = (word) => {
        const words = word.split(' ');

        if (words.length === 1) {
            return words[0].slice(0, 2);
        } else {
            // Combine the first letter of each word for words longer than two
            return words.slice(0, 2).map(w => w.slice(0, 1)).join('');
        }
    };

    const func = () => {
        console.log('lakhsbf');
        // <NoteComponent groupdetails={'hh'}/>
    }
    return (
        <div className='group-section'>
            <h2 className='heading'>Pocket Notes</h2>
            <div>
                {Object.entries(groups).map(([groupName, notes]) => (
                    <NavLink to={`/notes/${groupName}`} className={({ isActive }) => (isActive ? 'active-link' : 'just-link')}>
                        <div key={groupName} className='group-item'>
                            <div className='logo' style={{ background: `${colors[groupName]}` }}>
                                {extractLetters(groupName).toUpperCase()}
                            </div>
                            <p className='group-name'> {groupName}</p>
                        </div>

                    </NavLink>
                ))}
            </div>
           

            <div className='add-group'>
                <h1 onClick={openForm}>+</h1>
                <Popup isOpen={isFormOpen} onClose={closeForm} />
            </div>
        </div>
    )
}

export default GroupSection