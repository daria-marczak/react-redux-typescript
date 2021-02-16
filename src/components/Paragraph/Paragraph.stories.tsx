import * as React from 'react';
import { Story } from '@storybook/react';

import { Paragraph } from './Paragraph';

export default {
  title: 'Paragraph',
};
interface Props {
  content: string;
}

export const Default: Story = ({ content }: Props) => {
  return (
    <>
      <Paragraph>{content}</Paragraph>
    </>
  );
};

Default.args = {
  content: 'Test label',
};
