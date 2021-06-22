import styled, { keyframes } from 'styled-components';

const hoverScale = keyframes`

from{
  transform: scale(1);
}
to{
  transform: scale(1.2);
}
`;
export const DivCard = styled.div`
position:relative;
 &:hover  {
   z-index: 1;
  animation: 1s ${hoverScale} ease;
  animation-fill-mode: forwards;
  }
`;
export const ImgAnimation = styled.img`

`;
