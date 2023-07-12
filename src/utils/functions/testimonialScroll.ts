import Sconsts from "../../styled/consts"
import { getFontsize } from "./getFontSize"


export const handleTestimonialScroll = (el: HTMLDivElement, setMlPercent: (n: number) => void) => {
  const ws = document.body.clientWidth

  if (el) {
    const sl = el.scrollLeft
    const sw = el.scrollWidth

    const fs = getFontsize()
    const cardSize = getCardSize(ws, fs)

    const paddingSize = ((ws < Sconsts.breakpoints.tablet ? 1.6 : 6.5) * fs)

    const fullSize = sw - cardSize + paddingSize
    const percentage = (sl / fullSize) * 100

    setMlPercent(percentage)
  }
}

const getCardSize = (ws: number, fs: number) => {
  let value = 77.4 * fs

  if (ws < Sconsts.breakpoints.tablet) value = ws - 20 * fs
  if (ws < Sconsts.breakpoints.tablet) value = ws - 6 * fs

  return value
}