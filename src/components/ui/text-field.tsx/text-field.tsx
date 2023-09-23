import { ComponentPropsWithoutRef, HTMLInputTypeAttribute, useState } from 'react'

import s from './text-field.module.scss'

import { Typography } from '@/components/ui/typography/typography'

export type textFieldPropsType = {
  placeholder?: string

  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField: React.FC<textFieldPropsType> = ({
  placeholder,
  type,
  errorMessage,
  label,
  onChange,
  onValueChange,
  ...rest
}) => {
  const [textType, setTextType] = useState(type)
  const handlerTextType = () => {
    switch (textType) {
      case 'password':
        setTextType('text')
        break
      case 'text':
        setTextType('password')
        break
      default:
        setTextType('text')
        break
    }
  }

  const errorType = !!errorMessage
  const styleInput = `${s.input}  ${errorType ? s.error : ''}`

  return (
    <div className={s.container}>
      <label>
        <Typography variant="body2" as={'span'} className={s.label}>
          {label}
        </Typography>
        <input placeholder={placeholder} type={textType} className={styleInput} {...rest} />
        {type === 'password' && (
          <button type={'button'} onClick={handlerTextType} className={s.button}>
            х
          </button>
        )}
        {errorMessage && (
          <Typography className={s.errorText} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </label>
    </div>
  )
}
