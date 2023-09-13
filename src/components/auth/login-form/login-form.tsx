import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field.tsx/text-field'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.input<typeof schema>
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  const {
    field: { value, onChange },
  } = useController({ name: 'rememberMe', control, defaultValue: false })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        label={'password'}
        variant={'password'}
        errorMessage={errors.password?.message}
      />
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
