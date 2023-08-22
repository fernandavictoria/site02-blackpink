import * as S from "./styles"
import Coracao from "../../assets/casinha.png"
import Passar from "../../assets/direita.png"


export function Header() {
  return (
    <S.Header>
      <ul>
        <li>
        <a href="/"> <img src={Coracao} alt="like" /></a>
        </li>
      </ul>
      <ul>
        <li>
        <a href="/fotos">
        <img src={Passar} alt="passar" />
        </a>  
        </li>
      </ul>
    </S.Header>
  )
}