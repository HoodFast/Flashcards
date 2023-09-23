import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { CheckboxPropsType, CheckboxUI } from '@/components/ui/checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxPropsType, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <CheckboxUI
      {...{
        onCheckedChange: onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}
