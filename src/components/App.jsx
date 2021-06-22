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
    this.handleGeneradorId = this.handleGeneradorId.bind(this);
    this.handleDeleteTarea = this.handleDeleteTarea.bind(this);
    this.state = {
      contadorId: 0,
      tasks: [],
      form: {
        id: '',
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

  handleGeneradorId(evento) {
    const nuevoId = this.state.contadorId + 1;
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        id: nuevoId,
      },
      contadorId: nuevoId,
    });
  }

  handleDeleteTarea(itemId) {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((item) => item.id !== itemId),
    });
  }

  handleSubmit(evento) {
    evento.preventDefault();
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, this.state.form],
      form: {
        id: '',
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
          <AgregarTareas handleGeneradorId={this.handleGeneradorId} handleChange={this.handleChange} form={this.state.form} handleEnviar={this.handleSubmit} />
        </div>
        <ContainerCards tasks={this.state.tasks} handleDeleteTarea={this.handleDeleteTarea} />
      </DivApp>
    );
  }
}

export default App;
