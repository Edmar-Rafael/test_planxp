import { ButtonContainer } from "./styles";

function Button({children}) {

  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  )
}

export default Button