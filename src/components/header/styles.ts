import styled from "styled-components"
import { colors } from "../../style/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.secundary};
  display: flex;
  justify-content: end;
  height: 4rem;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  picture {
    
    img {
       height: 100%;
      }
  }
  ul{
    list-style-type: none;
  }
`

