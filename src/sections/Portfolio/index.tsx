import React, { forwardRef, useEffect, useRef } from 'react'
import * as S from './styles'
import projects from '../../utils/consts/portfolio'
import PortfolioFilter from '../../components/PortfolioFilter'
import ProjectItem from '../../components/ProjectItem'
import Sconsts from '../../styled/consts'
import { getFontsize } from '../../utils/functions/getFontSize'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Portfolio = forwardRef<HTMLElement, Props>(({ }, ref) => {

  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const list = listRef.current
    if (list) {
      list.onscroll = () => {
        const windowSize = window.document.body.clientWidth
        if (windowSize < Sconsts.breakpoints.tablet) {
          const fs = getFontsize()

          const scrolled = list.scrollLeft
          const cardSize = () => {
            let value = 413

            if (windowSize <= Sconsts.breakpoints.tablet) value = 430
            if (windowSize <= Sconsts.breakpoints.cellphone)
              value = (windowSize / 100) * 80

            return value
          }
          const cards = window.document.querySelectorAll('.portfolioProject');

          (window.document.querySelectorAll('.portfolioProject.projectFocused') as NodeListOf<HTMLDivElement>)
            .forEach(e => { e.classList.remove('projectFocused') })


          const paddingSize = ((windowSize < Sconsts.breakpoints.tablet ? 2.5 : 6.5) * fs)
          const actualItem = Math.round(scrolled / (cardSize() + paddingSize))
          if (actualItem < cards.length) cards[actualItem].classList.add('projectFocused')
        }
      }
    }
  }, [listRef])


  return (
    <S.Section ref={ref}>
      <S.Content className='container'>
        <S.Top>
          <S.Titles>
            <h2 className='sectionName'>Portfolio</h2>
            <h1 className='sectionTitle'>Alguns de nossos trabalhos</h1>
          </S.Titles>
          <PortfolioFilter />
        </S.Top>
        <S.ProjectsGridWrapper>
          <S.ProjectsGrid ref={listRef}>
            {projects.map((p, k) => <ProjectItem key={k} info={p} />)}
          </S.ProjectsGrid>
        </S.ProjectsGridWrapper>
      </S.Content>
    </S.Section>
  )

})


export default Portfolio