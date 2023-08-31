import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxRoot } from './checkbox'

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
  args: {},
  render: args => (
    <div style={divStyle}>
      <CheckboxRoot {...args} />
    </div>
  ),
}
