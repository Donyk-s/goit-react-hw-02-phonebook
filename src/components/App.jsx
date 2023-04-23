import React, { Component } from 'react';
import Form from './phoneBoock/Forma';
import ContactList from './contacklisst/Contactlist';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '', // додайте стан для number
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  }; // додайте обробник події для введення номеру

  formSubmitHandler = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { contacts, number } = this.state; // отримайте значення number зі стану компонента

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form
          onSubmit={this.formSubmitHandler}
          onNumberChange={this.handleNumberChange}
          number={number} // передайте значення поля вводу номеру як пропс
        />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
