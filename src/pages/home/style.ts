import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;
  max-width: 1090px;
  margin: 0 auto;
  min-height: calc(100vh - 8rem);
  picture{
    img {
      width: 130%;
      padding-right:4rem;
      
    }
  }
  figure{
    img {
      width: 100%;
      border-radius:22px ;

    }
  }  
`