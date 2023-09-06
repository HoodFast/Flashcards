import { FC, useState } from 'react'

import s from './text-field.module.scss'

import { Typography } from '@/components/ui/typography/typography'
type variantType = 'password' | 'text' | 'error'
export type textFieldPropsType = {
  placeholder?: string
  variant?: variantType
}

export const TextField: FC<textFieldPropsType> = ({ placeholder, variant }) => {
  const [textType, setTextType] = useState<variantType>(variant)
  const handlerTextType = () => {
    switch (textType) {
      case 'password':
        setTextType('text')
        break
      case 'text':
        setTextType('password')
        break
    }
  }
  const errorType = variant === 'error'
  const styleInput = `${s.input}  ${errorType ? s.error : ''}`

  console.log(styleInput)

  return (
    <>
      <label>
        <Typography variant="body2" as={'span'} className={s.label}>
          input
        </Typography>
        <input placeholder={placeholder} type={textType} className={styleInput} />
        {variant === 'password' && (
          <button onClick={handlerTextType} className={s.button}>
            х
          </button>
        )}
        {errorType && (
          <Typography className={s.error} variant={'caption'}>
            error!
          </Typography>
        )}
      </label>
    </>
  )
}
