import React from 'react';
import styled from 'styled-components';
import ContactInfo from '../ContactInfo/ContactInfo';
import Content from '../Content/Content';

const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  width: 100%;
`;

const Resume = () => {
  return (
    <Holder>
      <InfoContainer>
        <ContactInfo />
      </InfoContainer>
      <Content />
    </Holder>
  );
};

export default Resume;
