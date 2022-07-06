import styled from "styled-components";

const Separator = styled.div`
  width: ${({x}) => x || 5}px;
  height: ${({y}) => y || 5}px;

  @media(max-width: 800px) {
    display: none;
  }
`

export default Separator