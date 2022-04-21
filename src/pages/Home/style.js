import styled from "styled-components";
import bg from '../../images/Background.png'
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
Container.Body = styled.div`
 width: 100%;
 background: url(${bg});
 background-repeat: no-repeat;
 background-size: contain;
 max-width: 1440px;
 `
