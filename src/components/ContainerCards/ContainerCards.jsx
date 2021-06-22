/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import Card from '../Card/Card';
import {DivContainerCard} from './styledContainerCard';
import '../Card/Card.scss';
export default class ContainerCards extends Component {
  render() {
    const { tasks, handleDeleteTarea } = this.props;
    return (
      <DivContainerCard className="containerCarousel">
        {tasks.length > 0 ?
          tasks.map((task, index) => <Card tarea={task.tarea} handleDeleteTarea={handleDeleteTarea} fecha={task.fecha} categoria={task.categoria} key={index} id={task.id} />) :
          null}
      </DivContainerCard>
    );
  }
}
