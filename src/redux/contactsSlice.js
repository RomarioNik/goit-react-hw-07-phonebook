import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: ({ name, number }) => {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
        return { payload: contact };
      },
    },
    deleteContact: (state, action) => {
      // work
      const findIndex = state.contacts.findIndex(el => el === action.payload);
      state.contacts.splice(findIndex, 1);
      // doesn't work
      // return state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
