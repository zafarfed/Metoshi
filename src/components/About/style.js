import styled from "styled-components";
import bg from '../../images/Group66.png'


export const Container = styled.div`
width: 100%;
background: url(${bg});
background-repeat: no-repeat;
background-size: 100% 100%;
margin: 100px 0 100px 0;
display: flex;
position: relative;
justify-content: center;
align-items: center;
@media screen and (max-width: 767px)  {flex-direction: column}

`;


export const LeftCard = styled.div`
width:40%;
height:100%;
display:flex;
align-items:center;
justify-content: center;
@media screen and (max-width: 767px)  {width:100%; margin-top: 200px}

`;
LeftCard.Faq = styled.img`
`;


export const RightCard = styled.div`
width:60%;

height:100%;
display:flex;
margin-bottom: 100px; 
justify-content: start;
@media screen and (max-width: 767px)  {width:100%; }
`;
export const Center = styled.div`
width: 600px;
margin:150px 15px 0 15px;
`
RightCard.MainText = styled.span`
color: white;
font-size:32px;
font-weight:bold;
`;
RightCard.Text = styled.p`
color: white;
`;
RightCard.Nft = styled.p`
color: white;
font-weight: bold;
cursor:pointer;
`
