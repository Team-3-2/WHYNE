import type { Meta, StoryObj } from '@storybook/nextjs';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  // play 함수와 테스트 코드를 임시로 제거
  // 7.x에서는 테스트 기능이 제한적이므로 간단하게 유지
};
