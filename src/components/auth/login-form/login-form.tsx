import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'

import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field.tsx/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()
  const {
    field: { value, onChange },
  } = useController({ name: 'rememberMe', control, defaultValue: false })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('email', {
          required: { value: true, message: 'email is required' },
        })}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <TextField {...register('password')} label={'password'} variant={'password'} />
      <CheckboxUI
        checked={value}
        callback={onChange}
        label={'rememberMe'}
        style={{ margin: '20px' }}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
