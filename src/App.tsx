import { useState } from 'react'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui'
import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { TextField } from '@/components/ui/text-field.tsx/text-field'

export function App() {
  const [checked1, setChecked1] = useState<boolean>(false)
  const [checked2, setChecked2] = useState<boolean>(false)
  const onClick1 = () => {
    setChecked1(!checked1)
  }
  const onClick2 = () => {
    setChecked2(!checked2)
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
      <Button>test button</Button>
      <CheckboxUI
        id={'1'}
        callback={onClick1}
        checked={checked1}
        disabled={false}
        label={'check-box №1'}
      ></CheckboxUI>
      <TextField label={'password'} placeholder={'password'} variant={'password'} />
      <TextField placeholder={'text'} errorMessage={'value error'} label={'input'} />

      <LoginForm />
    </div>
  )
}
