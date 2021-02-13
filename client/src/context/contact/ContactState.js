import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const intialState = {
		contacts: [
			{
				id: 1,
				name: 'Bill Nye',
				email: 'bill@science.com',
				phone: '902384023',
				type: 'personal'
			},
			{
				id: 2,
				name: 'jemima Paddleduck',
				email: 'bill@science.com',
				phone: '902384023',
				type: 'personal'
			},
			{
				id: 3,
				name: 'Ricardo Milos',
				email: 'bill@science.com',
				phone: '902384023',
				type: 'professional'
			}
		],
		current: null,
		filtered: null
	};

	const [ state, dispatch ] = useReducer(contactReducer, intialState);

	// Add Contact
	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact
	 const deleteContact = id => {
		 dispatch({type: DELETE_CONTACT, payload: id})
	 }


	// Set current contact
	const setCurrent = contact => {
		dispatch({type: SET_CURRENT, payload: contact})
	}

	// Clear Current Contact
	const clearCurrent = id => {
		dispatch({type: CLEAR_CURRENT, payload: id})
	}
	// update contact
	const updateContact = contact => {
		dispatch({type: UPDATE_CONTACT, payload: contact})
	}

	// filter contacts
	const filterContact = text => {
		dispatch({type: FILTER_CONTACTS, payload: text})
	}
	// clear filter
	const clearFilter = text => {
		dispatch({type: CLEAR_FILTER })
	}
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContact,
				clearFilter

			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
