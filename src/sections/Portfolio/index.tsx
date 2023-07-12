import React, { forwardRef, useEffect, useRef } from 'react'
import * as S from './styles'
import projects from '../../utils/consts/portfolio'
import PortfolioFilter from '../../components/PortfolioFilter'
import ProjectItem from '../../components/ProjectItem'
import { handlePortfolioScroll } from '../../utils/functions/portfolioScroll'


type Props = {
  ref: React.ForwardRefExoticComponent<HTMLElement>;
}

const Portfolio = forwardRef<HTMLElement, Props>((props, ref) => {

  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const list = listRef.current
    if (list) list.onscroll = () => handlePortfolioScroll(list)
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