import React from 'react'
import rectangle1 from '../../images/quti.png'
import { buyNft } from './quti'
import { Container, Card } from './style'
const Quti = () => {
  return (
    <Container>
      {
        buyNft.map((v) => {
          return <Card>
            <Card.Nav />
            <Card.Wrapper a>
              <img src={v.img} alt="" />
            </Card.Wrapper>
            <Card.Wrapper>
              <h1>{v.title}</h1>
              <h2>{v.price}</h2>
            </Card.Wrapper>
          </Card>
        })
      }
    </Container>
  )
}

export default Quti
