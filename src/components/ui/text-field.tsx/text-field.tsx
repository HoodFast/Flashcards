import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import s from './text-field.module.scss'

import { Typography } from '@/components/ui/typography/typography'
type variantType = 'password' | 'text'
export type textFieldPropsType = {
  placeholder?: string
  variant?: variantType
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, textFieldPropsType>(
  ({ placeholder, variant, errorMessage, label, onChange, onValueChange, ...rest }, ref) => {
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

    const errorType = !!errorMessage
    const styleInput = `${s.input}  ${errorType ? s.error : ''}`

    return (
      <div className={s.container}>
        <label>
          <Typography variant="body2" as={'span'} className={s.label}>
            {label}
          </Typography>
          <input
            ref={ref}
            placeholder={placeholder}
            type={textType}
            className={styleInput}
            {...rest}
          />
          {variant === 'password' && (
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
)
