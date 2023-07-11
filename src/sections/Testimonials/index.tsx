import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import testimonials from '../../utils/consts/testimonial'
import TestimonialCard from '../../components/TestimonialCard'
import { NextArrow, PrevArrow } from '../../utils/resumedImports/icons'
import Sconsts from '../../styled/consts'
import { getFontsize } from '../../utils/functions/getFontSize'


const Testimonials = () => {

  const listRef = useRef<HTMLDivElement | null>(null)
  const [focusedItem, setFocusedItem] = useState(0)
  const [mlPercent, setMlPercent] = useState(0)

  const handleChange = (to: 'prev' | 'next') => {
    const qnt = testimonials.length

    if (to === 'prev') {
      let newId = (focusedItem === 0) ? 0 : focusedItem - 1
      setFocusedItem(newId)
    } else if (to === 'next') {
      let newId = (focusedItem === qnt - 1) ? qnt - 1 : focusedItem + 1
      setFocusedItem(newId)
    }
  }

  const handleListScroll = useCallback(() => {
    const el = listRef.current
    const windowSize = document.body.clientWidth

    if (el) {
      const sl = el.scrollLeft
      const sw = el.scrollWidth

      const fs = getFontsize()
      const cardSize = () => {
        // default, desktop
        let value = 77.4 * fs

        // tablet
        if (windowSize < Sconsts.breakpoints.tablet) value = windowSize - 20 * fs

        // cell
        if (windowSize < Sconsts.breakpoints.tablet) value = windowSize - 6 * fs


        return value
      }

      const paddingSize = ((windowSize < Sconsts.breakpoints.tablet ? 1.6 : 6.5) * fs)

      const fullSize = sw - cardSize() + paddingSize
      const percentage = (sl / fullSize) * 100

      setMlPercent(percentage)
    }
  }, [])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleListScroll)
    }
  }, [listRef, handleListScroll])


  return (
    <S.Section>
      <S.Content className='container'>
        <S.Top>
          <S.Titles>
            <h2 className='sectionName'>Depoimentos</h2>
            <h1 className='sectionTitle'>O que dizem nossos clientes</h1>
            <p className='sectionDescription'>Clientes que confiam em nossas soluções tecnológicas e estão prontos para dar o seu recado sobre nossos produtos e serviços.</p>
          </S.Titles>
        </S.Top>
        <S.CardsWrapper>
          <S.CardsList ref={node => listRef.current = node} itemN={focusedItem}>
            {testimonials.map((t, k) => <TestimonialCard key={k} info={t} />)}
          </S.CardsList>
        </S.CardsWrapper>
        <S.ControlsArea>
          <S.ProgressArea
            percent={((focusedItem + 1) / testimonials.length) * 100}
            mlPercent={mlPercent}
          />
          <S.ButtonsArea
            prevDisabled={focusedItem === 0}
            nextDisabled={focusedItem === testimonials.length - 1}
          >
            <PrevArrow onClick={() => handleChange('prev')} />
            <NextArrow onClick={() => handleChange('next')} />
          </S.ButtonsArea>
        </S.ControlsArea>
      </S.Content>
    </S.Section>
  )

}


export default Testimonials