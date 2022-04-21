import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import { myChest } from "./myChest";
import { buyNft } from "./buyNft";
import { myNft } from "./myNft";
import { useState } from "react";
import { Container, Wrapper, MenuNav, Category, imgs, LeftSide, MiddleSide, RightSide, } from "./style";
import vector from "../../images/VectorZ.png";

export const Main = () => {
  const [data, setData] = useState(buyNft);
  const [active, setActive] = useState("buy");

  function myChestFunc() {
    setData(myChest);
    setActive("chest");
  }


  function myChestFunc() {
    setData(myChest);
    setActive('chest');
  }

  function buyNfttFunc() {
    setData(buyNft);
    setActive("buy");
  }
  function myNftFunc() {
    setData(myNft);
    setActive("myNft");
  }


  return (
    <Container>
      <Wrapper>

        <LeftSide>
          <img src={image1} className='l' alt="" />
        </LeftSide>

        <MiddleSide>
          <MiddleSide.Text>
            Metoland
          </MiddleSide.Text>
          <MiddleSide.Text.P>Buy you <b>metoland</b>  NFT!</MiddleSide.Text.P>
        </MiddleSide>

        <RightSide>
          <img src={image2} className='r' alt="" />

        </RightSide>
      </Wrapper>

      <MenuNav>
        <MenuNav.Item
          style={{
            background: active == "buy" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={buyNfttFunc}
        >
          Buy NFT
        </MenuNav.Item>
        <MenuNav.Item
          style={{
            background: active == "chest" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={myChestFunc}
        >
          My Chest
        </MenuNav.Item>
        <MenuNav.Item
          style={{
            background: active == "myNft" && "rgba(255, 255, 255, 0.04)",
          }}
          onClick={myNftFunc}
        >
          My NFT
        </MenuNav.Item>
      </MenuNav>




      <Category>
        {data.map((item, index) => {
          return (
            <span key={index}>

              <Category.Item style={item.onlyImg && imgs}>
                <img style={item.id % 8 !== 0 && item.id % 9 !== 0 && item.id % 10 !== 0 ? { display: 'none' } : { display: 'flex' }} src={vector} className='lock' alt="" />

                {item.title && <Category.Item.Title><Category.Item.Title.Text>{item.title}</Category.Item.Title.Text></Category.Item.Title>
                }
                <Category.Item.Img
                  style={item.id % 8 !== 0 && item.id % 9 !== 0 && item.id % 10 !== 0 ? {} : { display: 'none' }}

                  src={item.img} />

                <Category.Item.C src={item.twelve} />
                <Category.Item.Btn
                  style={item.id % 8 !== 0 && item.id % 9 !== 0 && item.id % 10 !== 0 ? {} : { display: 'none' }}
                  disabled={item.disable}>{item.price}</Category.Item.Btn>
                {item.aviable && item.count &&
                  <Category.Item.Span>
                    {item.aviable} : {item.count}
                  </Category.Item.Span>
                }
              </Category.Item>
            </span>
          );
        })}
      </Category>
    </Container >
  );
};
export default Main;
