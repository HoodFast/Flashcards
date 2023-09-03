import { FC } from 'react'

import s from './text-field.module.scss'

import { Button } from '@/components/ui'
import { Typography } from '@/components/ui/typography/typography'
export type textFieldPropsType = {
  placeholder?: string
}

export const TextField: FC<textFieldPropsType> = ({ placeholder }) => {
  const placeholderText = (
    <Typography variant="body1" as={'span'} className={s.placeholder}>
      input
    </Typography>
  )

  return (
    <label>
      <Typography variant="body2" as={'span'} className={s.label}>
        input
      </Typography>
      <input type={'password'} className={s.input} />
      <button className={s.button}>х</button>
    </label>
  )
}
