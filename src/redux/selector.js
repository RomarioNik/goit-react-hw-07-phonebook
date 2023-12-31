import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilterValue = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectFilterValue, selectContacts],
  (filterValue, contacts) => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);
