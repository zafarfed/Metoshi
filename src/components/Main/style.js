import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 767px;
  padding: 50px 2% 0 2%;
  display: none;
@media screen and (max-width: 550px)  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const Card = styled.div`
  width: 370px;
  margin:  10px 0;
  display: flex;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
`;
Card.Nav = styled.div`
width: 370px;
height: 45px;
position: absolute;
background: rgba(255, 255, 255, 0.04);
border-radius: 12px 12px 0px 0px;
`
Card.Wrapper = styled.div`
width: ${({ a }) => a ? '40%' : '60%'};
display: flex;
flex-direction: column;
align-items: center;
h1{
  color: #fff;
  font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF; 
}
h2{
  font-weight: 500;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;
text-align: center;

color: #C2ABCB;
}
`

