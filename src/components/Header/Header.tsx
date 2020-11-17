import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #45a2bc;
  height: 200px;
  width: 100%;
`;

const Header = () => {
  return (
    <Holder>
      <div />
    </Holder>
  );
};

export default Header;
