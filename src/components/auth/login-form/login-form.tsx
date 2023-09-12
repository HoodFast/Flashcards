import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'

import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field.tsx/text-field'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} variant={'password'} />
      <CheckboxUI {...register('rememberMe')} label={'rememberMe'} style={{ margin: '20px' }} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
