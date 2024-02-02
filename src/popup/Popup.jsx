import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup, addNote } from '../groupSlice';

import './Popup.css'

const Popup = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
  const groups = useSelector((state) => state.notes.groups);
  const colors = useSelector((state) => state.notes.colors);

  console.log(groups, colors)

  const handleAddGroup = (newGroupName, selectedColor) => {
    console.log(selectedColor)
    // const newGroupName = prompt('Enter the name for the new group:');
    if (newGroupName && !groups[newGroupName]) {
    //   const color = prompt('Enter the color for the new group (hex or name):') || getRandomColor();
      dispatch(addGroup({ groupId: newGroupName, notes: [], color: selectedColor }));
    }
  };


    const [selectedColor, setSelectedColor] = useState('');
    const [formData, setFormData] = useState({
        // Define your form fields here
        // For example:
        groupname: '',
        selectedColor: '',
        // Add more fields as needed
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedColor(formData.selectedColor)
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        console.log(formData.username)
        handleAddGroup(formData.groupname, formData.selectedColor)
        // You can close the form after submission if needed
        onClose();
      };

      
  const colorset = [
    { label: 'Red', value: '#B38BFA' },
    { label: 'Blue', value: '#FF79F2' },
    { label: 'Green', value: '#43E6FC' },
    { label: 'Yellow', value: '#F19576' },
    { label: 'Orange', value: '#0047FF' },
    { label: 'Purple', value: '#6691FF' },
    // { label: 'Pink', value: 'pink' },
    // { label: 'Brown', value: 'brown' },
  ];


    //   const handleColorChange = (event) => {
    //     setSelectedColor(event.target.value);
    //   };



  return (
    <div className={`popup-form ${isOpen ? 'open' : 'closed'}`}>
    <div className="overlay" onClick={onClose}></div>
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Render your form fields here */}
        {/* For example: */}
        <h2>Create New Group</h2>
        <label>
          Group Name
          <input
            type="text"
            value={formData.username}
            placeholder = 'Enter group name'
            onChange={(e) => setFormData({ ...formData, groupname: e.target.value })}
          />
        </label>
        <label>
          Choose Color
          {/* <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          /> */}
         <div className='color-container'>
         {colorset.map((color) => (
          <div
            key={color.value}
            className={`color-option ${selectedColor === color.value ? 'selected' : ''}`}
            
            onClick={(e) => {
                setFormData({ ...formData,selectedColor: color.value });
                setSelectedColor(color.value)    
            }}
            style={{ backgroundColor: color.value }}
          >
            {/* {color.label} */}
          </div>
        ))}
         </div>
        </label>
        {/* Add more form fields as needed */}
        <button className='form-submit' type="submit">Create</button>
      </form>
    </div>
  </div>
  )
}

export default Popup