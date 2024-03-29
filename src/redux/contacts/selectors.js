export const selectContacts = state => state.contacts.contacts;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredName = state => state.contacts.filteredName;
export const selectEditModal = state => state.contacts.showModal;
export const selectEditContact = state => state.contacts.editContact;
export const selectIsDeleting = state => state.contacts.isDeleting;
