import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'

import { CheckboxUI } from './checkbox'

const divStyle = {
  height: '60px',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const meta = {
  title: 'Components/CheckboxRoot',
  component: CheckboxUI,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxUI>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    id: '1',
    checked: false,
    disabled: false,
    title: 'check-box storybook',
  },
  render: args => (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CheckboxUI {...args} />
    </Card>
  ),
}
