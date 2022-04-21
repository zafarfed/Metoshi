import { Container, LeftCard, RightCard, Center } from "./style";
import faq from '../../images/FAQ.png'
import minvector from '../../images/Vectorminus.png'

export const About = () => {
    return <Container>
        <LeftCard>
            <LeftCard.Faq src={faq} />
        </LeftCard>

        <RightCard>
            <Center>

                <RightCard.MainText> <img src={minvector} /> What is metoland NFT?</RightCard.MainText>
                <RightCard.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse

                </RightCard.Text>

                <RightCard.Nft> + NTF name 1</RightCard.Nft>
                <RightCard.Nft> + NTF name 2</RightCard.Nft>
                <RightCard.Nft> + NTF name 3</RightCard.Nft>
                <RightCard.Nft> + NTF name 4</RightCard.Nft>
                <RightCard.Nft> + NTF name 5</RightCard.Nft>


            </Center>
        </RightCard>
    </Container>

};
export default About;