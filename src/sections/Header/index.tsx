import React, { forwardRef } from 'react'
import * as S from './styles'

import { LogoFull } from '../../utils/resumedImports/icons'
import Button from '../../components/Button'
import Link from '../../components/Link'
import BurguerMenu from './BurguerMenu'


type Props = {
  sectionsRelations: {
    ref: React.MutableRefObject<HTMLElement | null>;
    name: string;
  }[];
}

const Header = forwardRef<HTMLElement, Props>(({ sectionsRelations }, ref) => {

  const handleClick = (refName: string) => {
    const section = sectionsRelations.filter(s => s.name === refName)[0].ref.current
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <S.Section>
      <S.Content className='container'>
        <LogoFull />
        <S.LinksArea id='headerLinksArea'>
          {sectionsRelations.map((s, k) => k < sectionsRelations.length - 1 ? (
            <Link key={k} text={s.name} onClick={() => handleClick(s.name)} />
          ) : null)}
        </S.LinksArea>
        <Button text={sectionsRelations[sectionsRelations.length - 1].name} onClick={() => handleClick(sectionsRelations[sectionsRelations.length - 1].name)} />
        <BurguerMenu
          sectionsRelations={sectionsRelations}
          handlePickFn={handleClick}
        />
      </S.Content>
    </S.Section>
  )

})


export default Header