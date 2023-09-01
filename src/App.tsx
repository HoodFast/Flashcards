import { CheckboxRoot } from '@/components/checkbox/checkbox'
import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      <Button>test button</Button>
      <CheckboxRoot checked={true}></CheckboxRoot>
    </div>
  )
}
