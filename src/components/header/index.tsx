import * as S from "./styles"
import Coracao from "../../assets/coracao.png"
import Passar from "../../assets/direita.png"


export function Header() {
  return (
    <S.Header>
      <ul>
        <li>
        <a href="https://www.youtube.com/watch?v=POe9SOEKotk"> <img src={Coracao} alt="like" /></a>
        </li>
      </ul>
      <ul>
        <li>
        <img src={Passar} alt="passar" />
        </li>
      </ul>
    </S.Header>
  )
}