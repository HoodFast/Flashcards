import { useState } from 'react'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui'
import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field.tsx/text-field'

export function App() {
  const [checked, setChecked] = useState<boolean>(false)

  const onClick = () => {
    setChecked(!checked)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '300px',
      }}
    >
      <LoginForm />
      <Button>test button</Button>
      <CheckboxUI
        id={'1'}
        onCheckedChange={onClick}
        checked={checked}
        disabled={false}
        label={'check-box №1'}
      ></CheckboxUI>
      <TextField label={'password'} placeholder={'password'} variant={'password'} />
      <TextField placeholder={'text'} errorMessage={'value error'} label={'input'} />
    </div>
  )
}
