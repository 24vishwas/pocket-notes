import { createSlice } from '@reduxjs/toolkit';

const groupSlice = createSlice({
  name: 'notes',
  initialState: {
   
     groups: {},
     colors: {},
  
   
  },
  reducers: {
    addGroup: (state, action) => {
        const { groupId, notes, color } = action.payload;
        state.groups[groupId] = notes || [];
        state.colors[groupId] = color ; 
      },
      addNote: (state, action) => {
        const { groupId, note } = action.payload;
        // Check if the group exists, if not, initialize it with an empty array
        state.groups[groupId] = state.groups[groupId] || []
        state.groups[groupId].push(note);
    },
    // Add more reducers as needed
  },
});

export const { addGroup, addNote } = groupSlice.actions;
export default groupSlice.reducer;