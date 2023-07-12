import Sconsts from "../../styled/consts"
import { HeroImage, MobileHero, TabletHero } from '../resumedImports/images'
import { ReactComponent as HeroIcon } from '../../assets/icons/hero.svg'


export const renderImage = () => {
  const windowSize = window.document.body.clientWidth

  const size = {
    desktop: windowSize > Sconsts.breakpoints.tablet,
    tablet: windowSize <= Sconsts.breakpoints.tablet &&
      windowSize > Sconsts.breakpoints.cellphone,
    cell: windowSize <= Sconsts.breakpoints.cellphone
  }

  return (size.desktop) ? (
    <img
      src={HeroImage}
      alt='Soluções digitais'
      width={630}
      height={730}
    />
  ) : (
    <HeroIcon width={304} height={340} />
  )

}