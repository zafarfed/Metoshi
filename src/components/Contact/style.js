import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: block;
padding: 0 0 120px 0;
background:transparent;
`;

export const ContactText = styled.div`
width:100%;
padding: 50px 0;
display:flex;
justify-content: center;
`;

export const SocMedia = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 1000px)  {flex-direction: column; align-items: center}
`;

SocMedia.Body = styled.div`
width: 100%;
margin: 20px 0;
display: flex;
justify-content: space-around;

`
export const SocMediaLink = styled.div`
border-radius:50%;
padding: 24px;
border: 1px solid rgba(255, 255, 255, 0.2);
img{
  width: 144px;
  height: 144px;
}
@media screen and (max-width: 1200px)  {
  padding: 12px;
  img{
  width: 120px;
  height: 120px;
}
}

@media screen and (max-width: 767px)  {
  width:75px;
height:75px;
padding: 12px;

img{
  width: 75px;
  height: 75px;
}
}
`;

