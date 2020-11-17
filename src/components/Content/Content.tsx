import React from 'react';
import styled from 'styled-components';

export const Holder = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
`;

const Content = () => {
  return <Holder></Holder>;
};

export default Content;
