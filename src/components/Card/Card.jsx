import React from 'react';
import '../../styles/components/Card.scss';
import { MdDone, MdDeleteSweep } from 'react-icons/md';
import imgCategorySalud from '../../assets/salud.jpg';
import imgCategoryCasa from '../../assets/casa.jpg';
import imgCategoryOrganizacion from '../../assets/organizacion.jpg';
import imgCategoryEstudios from '../../assets/estudios.jpg';
import imgDefault from '../../assets/default.jpg';
import { DivCard, ImgAnimation, DivaCardActios, ButtonDelete, ButtonDone, ToolTip } from './styledCard';
import './Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categoria, fecha, tarea, id, handleDeleteTarea } = this.props;
    const cover = () => {
      switch (categoria) {
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

    };
    return (
      <DivCard className='carousel_item'>
        <div className='card'>
          <div className='card-header '>
            <ImgAnimation src={cover()} alt='rover' />
          </div>
          <div className='card-body'>
            <span className='tag tag-teal'>
              {' '}
              {categoria}
              {' '}
            </span>
            <h4 onClick={() => console.log(`has dado click a la tarea ${tarea}`)}>
              {tarea}
              {' '}
              Id:
              {id}
            </h4>
            <p onClick={() => console.log(`la fecha es ${fecha}`)}>
              {fecha}
            </p>
            <div />
            <DivaCardActios>
              <ButtonDelete onClick={() => handleDeleteTarea(id)}>
                <MdDeleteSweep color='#E52727' size='2rem' />
                <ToolTip color='#E52727' className='tooltipDelete'>
                  Eliminar
                </ToolTip>
              </ButtonDelete>
              <ButtonDone onClick={() => handleDeleteTarea(id)}>
                {' '}
                <MdDone size='2rem' color='#38E974' />
                <ToolTip color='#38E974' className='tooltipDone'>
                  Hecho
                </ToolTip>
              </ButtonDone>
            </DivaCardActios>
          </div>
        </div>
      </DivCard>
    );
  }
}
export default Card;

