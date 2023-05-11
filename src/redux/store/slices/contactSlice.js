import { createSlice } from '@reduxjs/toolkit';
export const contactSlice = createSlice({
   name: 'contacts',
   initialState: {
       contacts: []
   },
    reducers: {
      addContact: (state,action) => {
        state.contacts = [...state.contacts, action.payload];
      }
        
    }
});
export const { addContact } = contactSlice.actions;