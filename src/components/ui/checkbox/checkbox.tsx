import { ComponentPropsWithoutRef, FC, forwardRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

import CheckedIcon from '@/assets/icons/CheckedIcon'
import { Typography } from '@/components/ui/typography/typography'

export type CheckboxPropsType = {
  id?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  callback?: (checked: boolean) => void
} & ComponentPropsWithoutRef<'input'>
export const CheckboxUI = forwardRef<HTMLButtonElement, CheckboxPropsType>(
  ({ id, label, checked, disabled, callback }, ref) => {
    return (
      <form>
        <div className={s.checkboxContainer}>
          <Checkbox.Root
            onClick={() => callback(checked)}
            disabled={disabled}
            checked={checked}
            ref={ref}
            className={s.checkboxRoot}
            defaultChecked
            id={id}
          >
            <span className={s.circle}></span>
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <CheckedIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>

          <Typography variant="body2" as={'label'}>
            <label htmlFor={id} className={`${s.label} ${disabled && s.disabledLabel}`}>
              {label}
            </label>
          </Typography>
        </div>
      </form>
    )
  }
)
