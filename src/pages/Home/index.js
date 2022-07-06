import { Button, Container, Icons, Separator } from "../../components";
import { 
  MenuContainer, 
  HomeContainer, 
  Menu, 
  Number, 
  Text, 
  ButtonContainer, 
  LinkMenu, 
  AnimationTop, 
  AnimationMiddle, 
  AnimationBottom 
} from "./styles";
import OQUEFAZEMOS_GAMES from '../../images/OQUEFAZEMOS_GAMES.png'
import teste_mobile from '../../images/teste_mobile.png'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(false)

  const texts = ['/QUEM SOMOS', '/O QUE FAZEMOS', '/PLAN NEWS', '/NOSSOS CLIENTES', '/CONTATO']

  return (
    <Container>
      <HomeContainer image={OQUEFAZEMOS_GAMES} mobileImg={teste_mobile}>
        <MenuContainer toggle={toggle}>
          <ButtonContainer onClick={() => setToggle(!toggle)}>
            <Button>
              <AnimationTop toggle={toggle}/>
              <AnimationMiddle toggle={toggle}/>
              <AnimationBottom toggle={toggle}/>
            </Button>
          </ButtonContainer>
          <Separator y={150}/>
          <LinkMenu>
          { texts.map((text, index) => 
            <Menu key={index} href='https://planmkt.com.br/planxp'>
              <Text>{text}</Text>
              <Number>0{index + 1}.</Number>
            </Menu>
          )}
          </LinkMenu>
          <Menu row='true'>
            <Text swap='true' x={60}>
              Que tal inovar com a gente
            </Text>
            <Text x={30} className='arrow_icon'>
              <Icons faIcon={faArrowRight}/>
            </Text>
          </Menu>
        </MenuContainer>
      </HomeContainer>
    </Container>
  )
}

export default Home