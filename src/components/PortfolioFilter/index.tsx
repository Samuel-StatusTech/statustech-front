import React, { useState } from 'react'
import * as S from "./styles"
import { PortfolioTags } from '../../utils/types/portfoliotags'
import { Dropdown } from '../../utils/resumedImports/icons'


function PortfolioFilter() {

  const [active, setActive] = useState<PortfolioTags>('all')
  const [ddwnExp, setDdwnExp] = useState(false)

  const handleClick = (value: PortfolioTags) => {
    setActive(value)
  }

  const renderFiltersItems = () => (
    <>
      <S.FilterItem active={active === 'all'} onClick={() => handleClick('all')}>
        <span>Todos</span>
      </S.FilterItem>
      <S.FilterItem active={active === 'design'} onClick={() => handleClick('design')}>
        <span>Design</span>
      </S.FilterItem>
      <S.FilterItem active={active === 'website'} onClick={() => handleClick('website')}>
        <span>Website</span>
      </S.FilterItem>
      <S.FilterItem active={active === 'system'} onClick={() => handleClick('system')}>
        <span>Sistema</span>
      </S.FilterItem>
      <S.FilterItem active={active === 'app'} onClick={() => handleClick('app')}>
        <span>Aplicativo</span>
      </S.FilterItem>
    </>
  )

  const parseActiveToText = () => {
    let r = ''

    switch (active) {
      case 'all':
        r = 'Todos'
        break;
      case 'design':
        r = 'Design'
        break;
      case 'website':
        r = 'Website'
        break;
      case 'system':
        r = 'Sistema'
        break;
      case 'app':
        r = 'Aplicativo'
        break;
      default:
        r = 'Todos'
        break;
    }

    return r
  }

  return (
    <S.Area onClick={() => setDdwnExp(!ddwnExp)}>
      <S.OptionsDropdown>
        <S.TopVisible expanded={ddwnExp}>
          <span>{parseActiveToText()}</span>
          <Dropdown />
        </S.TopVisible>
        <S.MenuWrapper expanded={ddwnExp}>
          <S.Menu>
            {renderFiltersItems()}
          </S.Menu>
        </S.MenuWrapper>
      </S.OptionsDropdown>
      <S.FiltersRow>
        {renderFiltersItems()}
      </S.FiltersRow>
    </S.Area >
  )

}


export default PortfolioFilter