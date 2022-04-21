import styled from "styled-components";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import vector from "../../images/Vector.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
@media screen and (max-width: 850px)  {margin-top: 100px}

`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LeftSide = styled.div`
  width: 174px;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid grey;
  .l{width:100%}
@media screen and (max-width: 1200px)  { width: 150px; height: 150px; }
@media screen and (max-width: 1000px)  { width: 120px; height: 120px; }
@media screen and (max-width: 850px)  { width: 100px; height: 100px; }
@media screen and (max-width: 767px)  { width: 90px; height: 90px; padding: 13px}
@media screen and (max-width: 600px)  { width: 75px; height: 75px; padding: 10px}
@media screen and (max-width: 450px)  { width: 70px; height: 70px; padding: 6px;}
`;

export const RightSide = styled.div`
 width: 174px;
  height: 174px;
  display: flex;
  margin-top: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 15px;
  border: 1px solid grey;
  .r{width:100%}
  @media screen and (max-width: 1200px)  { width: 150px; height: 150px;  margin-top: 150px;}
@media screen and (max-width: 1000px)  { width: 120px; height: 120px; margin-top: 130px;}
@media screen and (max-width: 850px)  { width: 100px; height: 100px; margin-top: 110px; }
@media screen and (max-width: 767px)  { width: 90px; height: 90px; padding: 13px}
@media screen and (max-width: 600px)  { width: 75px; height: 75px; padding: 10px}
@media screen and (max-width: 450px)  { width: 70px; height: 70px; padding: 6px}

`;

export const MiddleSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

MiddleSide.Text = styled.div`
  width: 656px;
  height: 246px;
  display: flex;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background: url(${vector});
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 96px;
  color: #fff;
  font-family: 'Georama', sans-serif;
@media screen and (max-width: 1200px)  { width: 560px; height: 220px;  font-size: 76px;}
@media screen and (max-width: 1000px)  { width: 480px; height: 180px;  font-size: 70px;}
@media screen and (max-width: 850px)  { width: 440px; height: 140px;  font-size: 68px;}
@media screen and (max-width: 767px)  { width: 340px; height: 120px;  font-size: 64px;}
@media screen and (max-width: 600px)  { width: 280px; height: 100px;  font-size: 50px;}
@media screen and (max-width: 450px)  { width: 206px; height: 80px;  font-size: 40px;}
`;



MiddleSide.Text.P = styled.p`
  font-family: 'Georama', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  color: #FF14B1;
  margin-top: -65px;
@media screen and (max-width: 1200px)  {  font-size: 45px;   margin-top: -60px;}
@media screen and (max-width: 1000px)  {  font-size: 40px;   margin-top: -45px;}
@media screen and (max-width: 850px)  {  font-size: 35px;   margin-top: -20px;}
@media screen and (max-width: 767px)  {  font-size: 30px;   margin-top: -17px; b{display: none}}
@media screen and (max-width: 600px)  {  font-size: 27px;}
@media screen and (max-width: 450px)  {  font-size: 25px;}
`;

export const MenuNav = styled.div`
  width: 98%;
  height: 70px;
  display: flex;
  margin-top: 150px;
  align-items: center;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.04);
@media screen and (max-width: 767px)  { display: none}

`;

MenuNav.Item = styled.div`
  width: 120px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  margin: 0 23px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: none;
`;

export const Category = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between; 
 .lock{
   position: absolute;
   z-index: -1;
 }
@media screen and (max-width: 550px)  { display: none}

`;

Category.Nav = styled.div`
 background: rgba(255, 255, 255, 0.04);
`


Category.Item = styled.div`
  height: 417px;
  width: 250px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.04);
  text-align: center;
  display: block;
  margin: 20px 8px;

`;
Category.Item.Title = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 32px 32px 0 0;
`;
Category.Item.Title.Text = styled.div`
width: 186px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
background: rgba(21, 6, 51, 0.2);
border-radius: 0px 0px 12px 12px;
`
Category.Item.Img = styled.img`
  width: 250px;
  background: rgba(255, 255, 255, 0.04);
  height: ${({ only }) => (only ? "150px" : "260px")};
  margin: 0px 60px 0 0;
`;
Category.Item.C = styled.span`
  margin-top: 230px;
  margin-left: -60px;
  font-weight: bolder;
  font-size: 30px;
  color: white;
`;

Category.Item.Btn = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 12px;
  font-weight: bold;
  outline: none;
  border: none;
  color:white;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  font-size:20px;
  margin: 10px 0;
`;

Category.Item.Span = styled.span`
  color: white;
`;
export const imgs = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
