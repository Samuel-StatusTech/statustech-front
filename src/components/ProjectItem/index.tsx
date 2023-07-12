import React, { useEffect, useRef } from 'react'
import * as S from "./styled"
import { Project } from '../../utils/types/projects'


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
  }, [])

  return (
    <S.Project className='portfolioProject' onClick={handleClick} ref={thisEl}>
      <S.Thumb
        src={info.thumb}
        alt={info.name}
        loading='lazy'
        width={(window.document.body.clientWidth / 100) * 80}
        height={((window.document.body.clientWidth / 100) * 80) * 1.29}
      />
      <S.Content>
        <S.ProjectDetails>
          <S.Client>{info.client}</S.Client>
          <S.Name>{info.name}</S.Name>
        </S.ProjectDetails>
      </S.Content>
    </S.Project>
  )

}


export default ProjectItem