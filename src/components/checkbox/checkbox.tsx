import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.css'

import { Typography } from '@/components/ui/typography/typography'
export const CheckboxRoot = () => {
  return (
    <form>
      <div className={s.checkboxContainer}>
        <Checkbox.Root className={s.checkboxRoot} defaultChecked id="c1"></Checkbox.Root>
        <Typography className={s.label} variant="body2" as={'label'}>
          checkbox
        </Typography>
      </div>
    </form>
  )
}
