import React, { useState } from "react";
import { Container, Card, Card2 } from "./style";
import minstar from '../../images/minstar-gray.png'

export const Footer = () => {
  const [click, setClick] = useState(false);

  return <Container>
    <Card>
      <Card.Metoshi>
        ©Metoshi, 2021
      </Card.Metoshi>
    </Card>

    <Card2>
      <Card2.Body>
        <Card2.Item>Our products <img src={minstar} /></Card2.Item>
        <Card2.Item>Red Panda <img src={minstar} /></Card2.Item>
        <Card2.Item>Tokenomics <img src={minstar} /></Card2.Item>
      </Card2.Body>

      <Card2.Body>
        <Card2.Item>Roadmap <img src={minstar} /></Card2.Item>
        <Card2.Item>Whitepapper <img src={minstar} /></Card2.Item>
        <Card2.Item>Contacts<img src={minstar} /></Card2.Item>
      </Card2.Body>
    </Card2>

    <Card c>
      <Card2.Item onClick={() => setClick(!click)} style={!click ? { color: 'white' } : { color: 'grey' }}>ENG </Card2.Item>
      <Card2.Item> | </Card2.Item>
      <Card2.Item onClick={() => setClick(!click)} style={click ? { color: 'white' } : { color: 'grey' }}> RUS</Card2.Item>
    </Card>

  </Container>
};
export default Footer;