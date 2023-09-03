import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

import CheckedIcon from '@/assets/icons/CheckedIcon'
import { Typography } from '@/components/ui/typography/typography'

export type CheckboxPropsType = {
  checked?: boolean
  disabled?: boolean
  callback?: (checked: boolean) => void
}
export const CheckboxRoot: FC<CheckboxPropsType> = ({ checked, disabled, callback }) => {
  return (
    <form>
      <div className={s.checkboxContainer}>
        <Checkbox.Root
          onClick={() => callback(checked)}
          disabled={disabled}
          checked={checked}
          className={s.checkboxRoot}
          defaultChecked
          id="c1"
        >
          <span className={s.circle}></span>
          <Checkbox.Indicator className={s.CheckboxIndicator}>
            <CheckedIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>

        <Typography variant="body2" as={'label'}>
          <label htmlFor={'c1'} className={`${s.label} ${disabled && s.disabledLabel}`}>
            check-box test
          </label>
        </Typography>
      </div>
    </form>
  )
}
