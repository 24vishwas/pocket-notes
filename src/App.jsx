import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "@fontsource/roboto";


import './App.css'
import GroupSection from './groupSection/GroupSection'
import NoteComponent from './noteComponent/NoteComponent';
import InitialNote from './noteComponent/InitialNote';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div className='home'>
     {/* <GroupSection /> */}

    <Routes>
    {isMobile
     ? (
      <>
       <Route path='/' element={<GroupSection/>}/>
       <Route path='/notes/:id' element={<NoteComponent  />}/>
      </>

     ) 
    : (
      <>
       <Route path='/' element={<>
       <GroupSection/>
       <InitialNote/>
       </>}/>
      {/* <Route path='/' element={<GroupSection/>}/> */}
       <Route path='/notes/:id' element={<>
        <GroupSection/>
        <NoteComponent  />
       </>}/>
      </>
    )}
    </Routes>

     {/* <NoteComponent groupdetails={''} /> */}
     {/* <InitialNote/> */}
       
     </div>
  )
}

export default App
