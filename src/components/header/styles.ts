import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.secundary};
  display: flex;
  justify-content: end;
  height: 4rem;
  picture {
   
    img {
       height: 100%;
      }
  }
`

