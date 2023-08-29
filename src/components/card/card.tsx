import { ComponentPropsWithRef, FC } from 'react'

import s from './card.module.css'
type CardPropsType = {} & ComponentPropsWithRef<'div'>

export const Card: FC<CardPropsType> = ({ ...restProps }) => {
  return <div className={s.card} {...restProps}></div>
}
