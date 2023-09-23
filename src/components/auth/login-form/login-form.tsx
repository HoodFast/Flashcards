import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-check-box/controlled-check-box'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
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
      <ControlledTextField name={'email'} control={control} label={'email'} />
      <ControlledTextField name={'password'} control={control} label={'password'} />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
