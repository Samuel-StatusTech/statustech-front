import React, { useRef } from 'react'
import * as S from "./styles"
import { BurguerIcon } from '../../../utils/resumedImports/icons'
import Link from '../../../components/Link'


type Props = {
  handlePickFn: (refName: string) => void;
  sectionsRelations: {
    ref: React.MutableRefObject<HTMLElement | null>;
    name: string;
  }[];
}

const BurguerMenu = ({ handlePickFn, sectionsRelations }: Props) => {

  const menuRef = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    menuRef.current?.classList.toggle('showing')
  }

  const handlePick = (refName: string) => {
    menuRef.current?.classList.remove('showing')
    handlePickFn(refName)
  }


  return (
    <S.Area id="burguerMenu">
      <BurguerIcon onClick={handleClick} />
      <S.MenuBg ref={menuRef}>
        <S.MenuContainer>
          <S.MenuArea>
            <BurguerIcon onClick={handleClick} />
            {sectionsRelations.map((s, k) => (
              <Link key={k} text={s.name} onClick={() => handlePick(s.name)} />
            ))}
          </S.MenuArea>
        </S.MenuContainer>
      </S.MenuBg>
    </S.Area>
  )

}


export default BurguerMenu