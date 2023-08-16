import * as S from "./styles.ts"
import twitter from "../../assets/icons8-twitter-quadrado-50.png"
import Insta from "../../assets/icons8-instagram-64.png"
import Coracao from "../../assets/coracao.png"

export function Footer() {
  return (
    <S.Footer>
        
        <img src={twitter} alt="Twitter" />
      <img src={Insta} alt="Instagram" />
      <img src={Coracao} alt="Coracao" />
    </S.Footer>
  )
}