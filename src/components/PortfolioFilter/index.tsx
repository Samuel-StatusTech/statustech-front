import React, { useState } from 'react'
import * as S from "./styles"
import { PortfolioTags } from '../../utils/types/portfoliotags'


function PortfolioFilter() {

  const [active, setActive] = useState<PortfolioTags>('all')

  const handleClick = (value: PortfolioTags) => {
    setActive(value)
  }


  return (
    <S.Area>
      <S.FilterItem active={active === 'all'} onClick={() => handleClick('all')} />
      <S.FilterItem active={active === 'design'} onClick={() => handleClick('design')} />
      <S.FilterItem active={active === 'website'} onClick={() => handleClick('website')} />
      <S.FilterItem active={active === 'system'} onClick={() => handleClick('system')} />
      <S.FilterItem active={active === 'app'} onClick={() => handleClick('app')} />
    </S.Area>
  )

}


export default PortfolioFilter