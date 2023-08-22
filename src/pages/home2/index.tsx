import * as S from "./style.ts"
import blackpink from "../../assets/tout.webp"
import blackpinkletra from "../../assets/text-1691766522331.png"

export function Home() {
    return (
      <S.Section>
        <picture>
        <img src={blackpinkletra} alt="blackpink" />
        </picture>
        <figure>
        <img src={blackpink} alt="integrantes do blackpink" />
        </figure>
     </S.Section>
    )
  }