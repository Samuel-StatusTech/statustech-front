import Sconsts from "../../styled/consts"
import { getFontsize } from "./getFontSize"


export const handlePortfolioScroll = (list: HTMLDivElement) => {
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