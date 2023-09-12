import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../card'

import { TextField } from './text-field'

const divStyle = {
  height: '60px',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const TextFieldText: Story = {
  args: {
    placeholder: 'text',
    variant: 'text',
    label: 'input',
  },
  render: args => (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField {...args} />
    </Card>
  ),
}
export const TextFieldPassword: Story = {
  args: {
    placeholder: 'password',
    variant: 'password',
    label: 'password',
  },
  render: args => (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField {...args} />
    </Card>
  ),
}
export const TextFieldError: Story = {
  args: {
    placeholder: 'error',
    errorMessage: 'value error',
    label: 'password',
  },
  render: args => (
    <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField {...args} />
    </Card>
  ),
}
