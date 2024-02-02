import React from 'react'

import './NoteComponent.css'
import bg from '../assets/bg.png'
import lock from '../assets/lock.png'

const InitialNote = () => {
    return (
        <div className='initialPage'>
            <img src={bg}
                alt=""/>
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className='encryption'>
              <img src={lock} alt="" />
              <p>end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default InitialNote
