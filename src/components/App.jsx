import React, { Component } from 'react';
import ContactForm from './module/Form';
import ContactList from './module/List';
import Filter from './module/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const filter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  addContact = userData => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === userData.name.toLowerCase()
      )
    ) {
      alert(`${userData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, userData],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm createContactsArray={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.contactFilter} filter={this.state.filter} />
        <ContactList
          filteredArray={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
