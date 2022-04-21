import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 80px;
display:flex;
border-top: 1px solid rgba(255, 255, 255, 0.1);
justify-content: space-between;
@media screen and (max-width: 767px)  {flex-direction: column-reverse; justify-content: center;}
`;

export const Card = styled.div`
margin: 20px 20px 0 20px;
display:flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 767px)  {display: ${({ c }) => c && 'none'}; width: 100%}

`;
Card.Metoshi = styled.div`
font-size: 16px;
font-weight: 700;
color: #817499;
`;
export const Card2 = styled.div`
display:flex;
width: 65%;
align-items: center;
margin-top: 20px;
justify-content: space-between;
@media screen and (max-width: 1000px)  {flex-direction: column;  width: 100%}

`;
Card2.Body = styled.div`
width: 100%;
margin: 3px 0;
display: flex;
justify-content: space-around;
@media screen and (max-width: 1000px)  {justify-content: center;}

`

Card2.Item = styled.span`
color: #fff;
font-weight:bold;
cursor:pointer;
`