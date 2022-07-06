import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  background: ${({image}) => `url(${image})`};
  overflow: hidden;

  @media(max-width: 800px) {
    justify-content: flex-end;
    background: ${({mobileImg}) => `url(${mobileImg})`};
    background-size: cover;
    min-width: 100%;
  max-width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  }

  @media(max-width: 500px) {
    justify-content: flex-end;
    background: ${({mobileImg}) => `url(${mobileImg})`};
    background-size: cover;
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 234px;
  transition: all .9s;

  @media(max-width: 800px) {
    width: ${({toggle}) => toggle ? 99.9 : 0}%;
    min-height: 100vh;
    border-bottom-left-radius: 25px;
    background-color: #1e1e1e;
  }
`

export const LinkMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 395px;
  border-bottom: 1px solid #3e3e3e;
`

export const Menu = styled.a`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({row}) => row ? 'row' : 'column'};
  height: 80px;
  padding-left: 40px;
  background-color: #1e1e1e;
  text-decoration: none;
`

export const Text = styled.div`
  width: ${({x}) => x}%;
  color: ${({swap}) => swap ? '#939598' : '#ebeced'};
  font-size: 1rem;
  font-family: 'Montserrat';
  z-index: 9;
  cursor: pointer;
  transition: all .5s;

  &:hover {
    filter: brightness(0.7)
  }

  &.arrow_icon{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 60px;
  }
`

export const Number = styled.span`
  color: #292929;
  font-size: 4rem;
  font-weight: 700;
  font-family: 'Montserrat';
  transform: translate(0, -50px);
`

export const ButtonContainer = styled.div`
  align-self: flex-end;
  padding: 5px;
  transition: all .5s;
`

export const AnimationTop = styled.div`
  width: ${({toggle}) => toggle ? '2.5rem' : '2rem'};
  height: .2rem;
  background-color: #1e1e1e;
  transform: ${({toggle}) => `rotate(${toggle ? '45deg' : ''})`};
  top: ${({toggle}) => toggle ? 28 : 17}px;
  position: absolute;
  transition: all .5s;
`

export const AnimationMiddle = styled.div`
  width: 2rem;
  height: .2rem;
  background-color: #1e1e1e;
  transform: ${({toggle}) => `translate(${toggle ? '-35px' : ''})`};
  opacity: ${({toggle}) => toggle ? 0 : 1};
  position: absolute;
  transition: all .5s;
`

export const AnimationBottom = styled.div`
  width: ${({toggle}) => toggle ? '2.5rem' : '2rem'};
  height: .2rem;
  background-color: #1e1e1e;
  transform: ${({toggle}) => `rotate(${toggle ? '-45deg' : ''})`};
  top: ${({toggle}) => toggle ? 29 : 40}px;
  position: absolute;
  transition: all .5s;
`