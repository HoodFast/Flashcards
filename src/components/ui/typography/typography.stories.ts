import type { Meta, StoryObj } from '@storybook/react'

import s from './typography.module.scss'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'text Large',
  },
}

export const h1: Story = {
  args: {
    variant: 'h1',
    children: 'text h1',
  },
}
