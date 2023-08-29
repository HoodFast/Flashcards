import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const JustCard: Story = {
  args: {
    style: { display: 'flex', justifyContent: 'center', width: '300px' },
    children: 'Card content',
  },
}
