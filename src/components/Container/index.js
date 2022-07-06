import { ContainerBox } from "./styles";

function Container({children}) {

  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}

export default Container