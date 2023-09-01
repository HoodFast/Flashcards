import { FC } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

import CheckedIcon from '@/assets/icons/CheckedIcon'
import { Typography } from '@/components/ui/typography/typography'

export type CheckboxPropsType = {
  checked: boolean
}
export const CheckboxRoot: FC<CheckboxPropsType> = ({ checked }) => {
  return (
    <form>
      <div className={s.checkboxContainer}>
        <div className={s.wrapper}>
          <Checkbox.Root className={s.checkboxRoot} defaultChecked id="c1">
            {checked && (
              <Checkbox.Indicator className={s.CheckboxIndicator}>
                <CheckedIcon />
              </Checkbox.Indicator>
            )}
          </Checkbox.Root>

          <Typography variant="body2" as={'label'}>
            <label htmlFor={'c1'} className={s.label}>
              check-box test
            </label>
          </Typography>
        </div>
      </div>
    </form>
  )
}
