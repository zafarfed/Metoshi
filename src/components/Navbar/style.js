import styled from "styled-components";

// // 991619670
export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
z-index: 2;
@media screen and (max-width: 767px)  { 
  position: fixed; 
}
 `
Container.Body = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: space-between;
transition: background-color 200ms linear;
@media screen and (max-width: 767px)  { 
background: #160037;
height: 80px;
min-height: 80px;
box-shadow: 0px 15px 15px -10px rgba(0,0,0,0.75);


  }
`;

// @media screen and (max-width: 1336px)  { font-size: 18px}
// @media screen and (max-width: 767px)  { font-size: 12px}
// @media screen and (max-width: 430px)  { font-size: 8px}

// @media screen and (max-width: 1336px)  { font-size: 12px; width: 60px}
// @media screen and (max-width: 767px)  { font-size: 10px; margin-left: 10px; height: 25px}
// @media screen and (max-width: 430px)  { font-size: 7px; width: 45px; margin-left: 5px}



export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;

Nav.Navbar = styled.div`
width: 100%;
display: flex;
align-items: center;
@media screen and (max-width: 767px)  { display: none}
`

export const NavItems = styled.div`
  width: 100%;
  flex: ${({ a }) => a && '1'};
  flex: ${({ b }) => b && '2'};
  flex: ${({ c }) => c && '1'};
  display: flex;
  padding: ${({ b }) => b && '0 5%'};
  align-items: center;
  justify-content:space-around;
  justify-content: ${({ a }) => a && 'start'};
.img{margin-left:14px}
@media screen and (max-width: 767px)  {
  display: ${({ b }) => b && 'none'};
  display: ${({ c }) => c && 'none'};
.img{margin-left:64px}

}

`;

NavItems.Text = styled.div`
text-transform: none;
font-size: 15px;
color: #fff;
color: ${({ click }) => click && 'grey'};
border-right: ${({ cl }) => cl && '1px solid #fff'};
padding-right: ${({ cl }) => cl && '10px'};
color: ${({ clicks }) => clicks && 'grey'};
font-weight: bold;
margin-left: 10px;
cursor: pointer;
@media screen and (max-width: 1336px)  { font-size: 15px}
@media screen and (max-width: 1000px)  { font-size: 12px}
`;

NavItems.Btn = styled.div`
padding: 10px;
width: 120px;
cursor: pointer;
border-radius: 12px;
border:none;
font-size: 16px;
margin: 0 20px;
background: #2e2868;
font-weight: bold;
color: white;
text-align: center;
@media screen and (max-width: 1000px)  { width:85px; font-size: 14px}

`;

// @media screen and (max-width: 1336px)  {width: 340px;}
// @media screen and (max-width: 1000px)  {width: 280px;}
// @media screen and (max-width: 767px)  {width: 220px;}
// @media screen and (max-width: 1000px)  {flex-direction: column}
// @media screen and (max-width: 1000px)  {margin-top: 230px;}
// @media screen and (max-width: 1500px)  {img{height: 300px}}
// @media screen and (max-width: 1335px)  {img{height: 260px;}}
// @media screen and (max-width: 1180px)  { img{height: 230px; margin: 0}};
// @media screen and (max-width: 1000px)  { display: ${({ img }) => img && 'none'};}
// @media screen and (max-width: 1500px)  {font-size: 60px}
// @media screen and (max-width: 1335px)  {font-size: 50px}
// @media screen and (max-width: 1180px)  {font-size: 40px}
// @media screen and (max-width: 571px)  {font-size: 30px}
// @media screen and (max-width: 1500px)  {font-size: 25px}
// @media screen and (max-width: 1336px)  {font-size: 20px; margin: 25px 0 40px 0}
// @media screen and (max-width: 1180px)  {font-size: 17px; margin: 25px 0 30px 0;}
// @media screen and (max-width: 1336px)  {width: 130px; height: 30px; font-size: 12px;}


export const Bar = styled.div`
  width: 25px;
  height: 23px;
  margin-left: 18px;
  display: none;
@media  (max-width: 767px) {display: block}
`
export const Bars = styled.div`
  width:  ${({ d }) => d ? '18px' : '25px'};
  height: 2.4px;
  float: left;
  border-radius: 3px;
  transform: ${({ a }) => a && 'rotate(45deg) translate(5px, 8px)'};
  transform: ${({ c }) => c && 'rotate(-45deg) translate(5px, -8px)'};
  width: ${({ b }) => b && '0px'};
  margin: 3.5px;
  background: ${({ color }) => color ? '#111' : '#fff'} ;
  transition: all .3s;
`