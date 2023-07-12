import Sconsts from "../../styled/consts"
import { ContactImage, HeroImage, MobileHero, TabletHero } from '../resumedImports/images'


export const renderImage = () => {
  const windowSize = window.document.body.clientWidth

  const size = {
    desktop: windowSize > Sconsts.breakpoints.tablet,
    tablet: windowSize <= Sconsts.breakpoints.tablet &&
      windowSize > Sconsts.breakpoints.cellphone,
    cell: windowSize <= Sconsts.breakpoints.cellphone
  }

  return (
    <img
      src={(size.desktop) ? HeroImage : ContactImage}
      alt='Soluções digitais'
      width={(size.desktop) ? 630 : (size.tablet) ? 550 : 304}
      height={(size.desktop) ? 730 : (size.tablet) ? 614 : 340}
    />
  )

}