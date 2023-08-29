import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const divStyle = {
  height: '60px',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: args => (
    <div style={divStyle}>
      <Button {...args}>Button primary</Button>
    </div>
  ),
}

export const Link: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: args => (
    <div style={divStyle}>
      <Button as={'a'} {...args}>
        Button link
      </Button>
    </div>
  ),
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}
