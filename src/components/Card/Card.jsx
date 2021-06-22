import React from 'react';
import '../../styles/components/Card.scss';
import imgCategorySalud from '../../assets/salud.jpg';
import imgCategoryCasa from '../../assets/casa.jpg';
import imgCategoryOrganizacion from '../../assets/organizacion.jpg';
import imgCategoryEstudios from '../../assets/estudios.jpg';
import imgDefault from '../../assets/default.jpg';
import {DivCard, ImgAnimation} from './styledCard';
import './Card.scss';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {categoria, fecha, tarea} = this.props;
    const cover = ()=>{
      switch(categoria){
        case 'Salud':
          return imgCategorySalud;
        case 'Casa':
          return imgCategoryCasa;
        case 'Organizacion':
          return imgCategoryOrganizacion;
        case 'Estudios':
          return imgCategoryEstudios;
        default:
          return imgDefault;
      }
      
    }
    return (
      <DivCard className="carousel_item">
        <div className='card'>
        <div className='card-header '>
          <ImgAnimation src={cover()} alt='rover' />
        </div>
        <div className='card-body'>
          <span className='tag tag-teal'> {categoria} </span>
          <h4>
            {tarea}
          </h4>
          <p>
            {fecha}
          </p>
          <div >
            
          </div>
        </div>
      </div>
      </DivCard>
      
    );
  }
}
export default Card;

