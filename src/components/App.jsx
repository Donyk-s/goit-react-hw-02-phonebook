import React, { Component } from 'react';
import Form from './phoneBoock/Forma';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
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
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
