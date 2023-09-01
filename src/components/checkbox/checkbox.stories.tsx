import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxRoot } from './checkbox'

import { Card } from '@/components/card'

const divStyle = {
  height: '60px',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const meta = {
  title: 'Components/CheckboxRoot',
  component: CheckboxRoot,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxRoot>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    checked: true,
  },
  render: args => (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CheckboxRoot {...args} />
    </Card>
  ),
}
