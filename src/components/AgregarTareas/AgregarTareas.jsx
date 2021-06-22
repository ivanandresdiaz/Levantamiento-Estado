import React from 'react';
import { Form, FormInput, Button, Select } from './styledAgregarTareas';

class AgregarTareas extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { handleChange, handleEnviar, form } = this.props;
    return (
      <>
        <Form onSubmit={handleEnviar}>
          <FormInput value={form.tarea} type='text' name='tarea' placeholder='Nombre de Tarea' onChange={handleChange} required />
          <FormInput value={form.fecha} type='date' name='fecha' onChange={handleChange} required />
          <Select value={form.categoria} placeholder='seleccione' name='categoria' onChange={handleChange} required>
            <option value=''> Seleccione</option>
            <option value='Salud'>Salud</option>
            <option value='Organizacion'>Organizacion</option>
            <option value='Estudios'>Estudios</option>
            <option value='Casa'>Casa</option>
          </Select>
          <Button type='submit'>Agregar Tarea</Button>
        </Form>

      </>
    );
  }
}

export default AgregarTareas;
