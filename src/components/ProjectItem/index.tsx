import React from 'react'
import * as S from "./styled"
import { Project } from '../../utils/types/projects'
import { ProjectArrow } from '../../utils/resumedImports/icons';


type Props = {
  info: Project;
}

const ProjectItem = ({ info }: Props) => {


  return (
    <S.Project bg={info.thumb}>
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