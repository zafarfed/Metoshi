import React, { useState, useContext } from 'react'
import { Fals } from '../../context/context';
import { Sidebar, Icon, Logo, Home, Buy, Paper, Contact, Sign, Trans } from './style'

const Sidebars = () => {
  const [isOpen, setIsopen] = useContext(Fals)
  const [click, setClick] = useState(false);

  return (
    <div>
      <Sidebar activ={isOpen}>
        {/* <Icon>
          <Logo />
          <div>
            <h1 a>yoqut.uz</h1>
            <h2>academy</h2>
          </div>
        </Icon> */}

        <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Home /> Home </Sidebar.Text>
        <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Buy /> Buy NFT  </Sidebar.Text>
        <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Paper /> Whitepaper </Sidebar.Text>
        <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Contact /> Contacts </Sidebar.Text>
        <Sidebar.Text onClick={() => setIsopen(!isOpen)}><Sign /> 0x16cd...f345 </Sidebar.Text>
        <div style={{ display: 'flex' }}> <Trans />
          <Sidebar.Text cl a onClick={() => setClick(!click)} click={click} > ENG  </Sidebar.Text>
          <Sidebar.Text a onClick={() => setClick(!click)} clicks={!click}>  RUS</Sidebar.Text>
        </div>

      </Sidebar>
    </div>
  )
}

export default Sidebars
