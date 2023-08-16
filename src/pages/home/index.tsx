import * as S from "./style"
import blackpink from "../../assets/bp1.png"
import blackpinkletra from "../../assets/text-1691756434077.png"

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