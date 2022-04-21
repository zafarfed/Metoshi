import styled from "styled-components";
import { ReactComponent as logo } from "../../images/logo.svg";
import { ReactComponent as home } from "../../images/home.svg";
import { ReactComponent as buy } from "../../images/buy.svg";
import { ReactComponent as paper } from "../../images/paper.svg";
import { ReactComponent as contact } from "../../images/contact.svg";
import { ReactComponent as sign } from "../../images/sign.svg";
import { ReactComponent as trans } from "../../images/trans.svg";

export const Sidebar = styled.div`
position: fixed;
width: 70%;
height: 100vh;
padding: 0 0 0 40px;
margin-top: 40px;
background: #160037;
box-shadow: 15px 0px 15px -10px rgba(0,0,0,0.75);
display: none;
z-index: 1;
transition: all .5s;
left: ${({ activ }) => activ ? '0' : '-100%'};
flex-direction: column;
@media screen and (max-width: 767px)  {display: flex}
h1{
  color: red;
  line-height: 20px;
}
h2{
  color: blue;
  line-height: 20px;
}
`
Sidebar.Text = styled.div`
margin:  15px 0;
font-weight: bold;
display: flex;
align-items: center;
color: #fff;
cursor: pointer;
color: ${({ click }) => click && 'grey'};
border-right: ${({ cl }) => cl && '1px solid #fff'};
padding-right: ${({ cl }) => cl && '20px'};
margin-right: ${({ cl }) => cl && '20px'};
font-size: ${({ a }) => a ? '18px' : '25px'};
color: ${({ clicks }) => clicks && 'grey'};
`

export const Icon = styled.div`
width: 100%;
height: 150px;
display: flex;
align-items: center;
`
export const Logo = styled(logo)`
width: 80px;
height: 80px;
min-width: 80px;
min-height: 80px;
fill: red;
margin-right: 30px;
`

export const Home = styled(home)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`
export const Buy = styled(buy)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`
export const Paper = styled(paper)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`
export const Contact = styled(contact)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`
export const Sign = styled(sign)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`
export const Trans = styled(trans)`
width: 45px;
height: 45px;
fill: #fff;
margin-right: 15px;
`