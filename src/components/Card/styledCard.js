import styled, { keyframes } from 'styled-components';

const hoverScale = keyframes`

from{
  transform: scale(1);
}
to{
  transform: scale(1.05);
}
`;
export const DivCard = styled.div`
position:relative;
 &:hover  {
   z-index: 1;
  animation: .5s ${hoverScale} ease;
  animation-fill-mode: forwards;
  }
`;
export const ImgAnimation = styled.img`

`;
export const DivaCardActios = styled.div`
width: 90%;
display: flex;

justify-content: space-between;
`;
export const ButtonDelete = styled.button`
position: relative;
display: flex;
border: none;
background-color:transparent;
justify-content: center;
align-items: center;
border-radius: 50%;
padding: 8px;
&:hover{
  border: 1px solid #E52727;
  background-color:#EEC6C6;
  .tooltipDelete{
  display: inline-block;
}
}
`;
export const ButtonDone = styled.button`
position: relative;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
padding: 8px;
border: none;
background-color:transparent;
&:hover{
  border: 1px solid #38E974;
  background-color:#BDE3CA;
  
.tooltipDone{
  display: inline-block;
}
}

`;
export const ToolTip = styled.div`
border-radius: 3px;
background-color:${(props) => props.color};
box-shadow: 12px 16px 32px 0px #00000040;
position: absolute;
top: -15px;
color: white;
right: -30px;
padding:3px;
display: none;
`;
