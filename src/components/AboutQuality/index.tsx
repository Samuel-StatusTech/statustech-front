import * as S from './styles'
import { Bullet } from '../../utils/resumedImports/icons'


type Props = {
  name: string;
  desc: string;
}

const AboutQuality = ({ name, desc }: Props) => {


  return (
    <S.Item>
      <S.ItemTitle>
        <Bullet />
        <S.QualityName>{name}</S.QualityName>
      </S.ItemTitle>
      <S.ItemDesc>{desc}</S.ItemDesc>
    </S.Item>
  )

}


export default AboutQuality