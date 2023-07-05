import React, { useEffect, useRef } from 'react'
import * as S from "./styled"
import { Project } from '../../utils/types/projects'
import { ProjectArrow } from '../../utils/resumedImports/icons';


type Props = {
  info: Project;
}

const ProjectItem = ({ info }: Props) => {

  const thisEl = useRef<HTMLDivElement | null>(null)

  const handleClick = () => {
    document.querySelectorAll(".portfolioProject.projectFocused")
      .forEach(el => el.classList.remove('projectFocused'))

    thisEl.current?.classList.add('projectFocused')
  }

  useEffect(() => {
    document.querySelectorAll(".portfolioProject")[0].classList.add('projectFocused')
  },)

  return (
    <S.Project bg={info.thumb} className='portfolioProject' onClick={handleClick} ref={thisEl}>
      <S.Content>
        <S.ProjectDetails>
          <S.Client>{info.client}</S.Client>
          <S.Name>{info.name}</S.Name>
        </S.ProjectDetails>
        <S.ArrowArea>
          <ProjectArrow />
        </S.ArrowArea>
      </S.Content>
    </S.Project>
  )

}


export default ProjectItem