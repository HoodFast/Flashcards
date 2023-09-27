import { useState } from 'react'

import { LoginForm } from '@/components/auth/login-form/login-form'
import { Button } from '@/components/ui'
import { CheckboxUI } from '@/components/ui/checkbox/checkbox'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-check-box/controlled-check-box'
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
    </div>
  )
}
