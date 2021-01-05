import * as React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

export const Paragraph: React.FC = ({ children }) => <Text>{children}</Text>;
