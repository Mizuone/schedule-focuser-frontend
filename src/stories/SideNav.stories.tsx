import type { Meta, StoryObj } from '@storybook/react';

import { SideNav } from '../components/navigation/SideNav';
import { MemoryRouter } from 'react-router-dom';
import '../index.css';
import { within, expect, userEvent } from '@storybook/test';

const meta = {
    title: 'Components/SideNav',
    component: SideNav,
    decorators: [
        (Story: any) => (
            <MemoryRouter initialEntries={["/"]}>
                <div className='flex flex-row max-h-full h-screen'>
                    <Story/>
                </div>
            </MemoryRouter>
        ),
    ],
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hovered: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const schedulerLink = canvas.getByRole('link', { name: /Scheduler/i });

    await expect(schedulerLink).toBeInTheDocument();
    await userEvent.hover(schedulerLink);
  },
};
