import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  children: React.ReactNode;
}

export const Paragraph: React.FC<Props> = ({ children }) => <Text>{children}</Text>;
