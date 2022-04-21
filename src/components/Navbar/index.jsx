// import { Container, LeftCard, MiddleCard, RightCard } from "./style";
import React, { useContext, useState } from "react";
import minstar from '../../images/minstar-gray.png'
import { Container, Nav, NavItems, Sidebar, Bar, Bars } from "./style";
import { Fals } from '../../context/context';
import logo from '../../images/Logo.png'
import Sidebars from '../Sidebar';

export const Navbar = () => {

  const [isOpen, setIsopen] = useContext(Fals);
  const [click, setClick] = useState(false);

  return (

    <Container>
      <Sidebars />
      <Container.Body>

        <Bar onClick={() => setIsopen(!isOpen)}>
          <Bars a={isOpen} />
          <Bars d b={isOpen} />
          <Bars c={isOpen} />
        </Bar>

        <Nav>

          <NavItems a>
            <img className='img' src={logo} />
          </NavItems>
          <NavItems b>
            <NavItems.Text> Home <img src={minstar} /> </NavItems.Text>
            <NavItems.Text> Buy NFT <img src={minstar} /> </NavItems.Text>
            <NavItems.Text> Whitepaper <img src={minstar} /> </NavItems.Text>
            <NavItems.Text> Contacts <img src={minstar} /> </NavItems.Text>
          </NavItems>
          <NavItems c>
            <div style={{ display: 'flex' }}>
              <NavItems.Text onClick={() => setClick(!click)} click={click} cl> ENG  </NavItems.Text>
              <NavItems.Text onClick={() => setClick(!click)} clicks={!click}>  RUS</NavItems.Text>
            </div>
            <NavItems.Btn >0x16cd...f345</NavItems.Btn>
          </NavItems>

        </Nav >

      </Container.Body>


    </Container>

  );
};
export default Navbar;