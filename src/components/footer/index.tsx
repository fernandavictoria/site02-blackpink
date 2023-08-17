import * as S from "./styles.ts"
import twitter from "../../assets/icons8-twitter-quadrado-50.png"
import Insta from "../../assets/icons8-instagram-64.png"
import Coracao from "../../assets/coracao.png"

export function Footer() {
  return (
    <S.Footer>
      
       <a href="https://twitter.com/BLACKPINK"> <img src={twitter} alt="Twitter" /></a>
       <a href="https://www.instagram.com/blackpinkofficial/"> <img src={Insta} alt="Instagram" /></a>
       <a href="https://www.youtube.com/watch?v=vRXZj0DzXIA"> <img src={Coracao} alt="Coracao" /></a>
   
    </S.Footer>
  )
}