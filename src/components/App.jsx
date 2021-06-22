/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import AgregarTareas from './AgregarTareas/AgregarTareas';
import Card from './Card/Card';
import { DivApp } from './styledApp';
import ContainerCards from './ContainerCards/ContainerCards';

// Padre

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      tasks: [],
      form: {
        tarea: '',
        categoria: '',
        fecha: '',
      },
    };
  }

  handleChange(evento) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [evento.target.name]: evento.target.value,
      },
    });
  }

  handleSubmit(evento) {
    evento.preventDefault();
    console.log('Form a enviar', this.state.form);
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, this.state.form],
      form: {
        tarea: '',
        categoria: '',
        fecha: '',
      },
    });
  }

  render() {
    return (
      <DivApp>
        <div>
          <AgregarTareas handleChange={this.handleChange} form={this.state.form} handleEnviar={this.handleSubmit} />
        </div>
        <ContainerCards tasks={this.state.tasks} />
      </DivApp>
    );
  }
}

export default App;
