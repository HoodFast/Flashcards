import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-check-box/controlled-check-box'
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
    defaultValues: {
      email: '123@mail.ru',
      password: '1234567',
      rememberMe: false,
    },
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <TextField {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <TextField
        {...register('password')}
        label={'password'}
        variant={'password'}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
