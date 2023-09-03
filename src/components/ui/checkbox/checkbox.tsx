import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

import CheckedIcon from '@/assets/icons/CheckedIcon'
import { Typography } from '@/components/ui/typography/typography'

export type CheckboxPropsType = {
  id: string
  title?: string
  checked?: boolean
  disabled?: boolean
  callback?: (checked: boolean) => void
}
export const CheckboxUI: FC<CheckboxPropsType> = ({ id, title, checked, disabled, callback }) => {
  return (
    <form>
      <div className={s.checkboxContainer}>
        <Checkbox.Root
          onClick={() => callback(checked)}
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
            {title}
          </label>
        </Typography>
      </div>
    </form>
  )
}
