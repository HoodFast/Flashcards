import { useState } from 'react'

import { CheckboxRoot } from '@/components/checkbox/checkbox'
import { Button } from '@/components/ui'

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
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button>test button</Button>
      <CheckboxRoot callback={onClick1} checked={checked1} disabled={false}></CheckboxRoot>
      <CheckboxRoot callback={onClick2} checked={checked2} disabled={true}></CheckboxRoot>
    </div>
  )
}
