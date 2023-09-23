import { ComponentPropsWithoutRef, FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import CheckedIcon from '@/assets/icons/CheckedIcon'
import { Typography } from '@/components/ui/typography/typography'

export type CheckboxPropsType = {
  id?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<'input'>
export const CheckboxUI: FC<CheckboxPropsType> = ({
  id,
  label,
  checked,
  disabled,
  onCheckedChange,
}) => {
  return (
    <form>
      <div className={s.checkboxContainer}>
        <Checkbox.Root
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          checked={checked}
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
