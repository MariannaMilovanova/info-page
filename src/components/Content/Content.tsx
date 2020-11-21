import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {map} from 'lodash';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {experience, skills} from './data';
import {Block, InfoColumn, Label} from '../ContactInfo/UIComponents';

export const Holder = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBlock = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%%;
  height: 100%;
  text-align: left;
  padding: 20px 10px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #220087;
  text-transform: uppercase;
  padding: 10px 10px;
  text-align: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  text-align: left;
`;

export const Element = styled.li`
  line-height: 20px;
  padding: 2px 0;
  font-size: 16px;
`;

export const CompanyName = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding: 5px 0;
`;

export const CompanyDescription = styled.div`
  font-size: 18px;
  font-style: italic;
  padding: 5px 0;
`;

export const Role = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 5px 0;
`;

export const Link = styled.a`
  font-size: 18px;
  font-style: italic;
  padding: 5px;
`;

export const Logo = styled.div<{img: string}>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  ${({img}) => (img ? `background-image: url(${img})` : '')};
  width: 23px;
  height: 23px;
`;

const Content = () => {
  return (
    <Holder>
      <ContentBlock>
        <Title>TECHNOLOGY STACK</Title>
        <Block>
          {map(skills, (column, key) => (
            <InfoColumn key={key}>
              {map(column, ({label, img}, key) => (
                <FlexRow key={key}>
                  <Logo img={img} />
                  <Label>{label}</Label>
                </FlexRow>
              ))}
            </InfoColumn>
          ))}
        </Block>
      </ContentBlock>
      <ContentBlock style={{maxWidth: 800}}>
        <Title>EXPERIENCE</Title>
        {map(experience, ({company, description, role, time, responsibilities, link}, key) => (
          <InfoColumn key={key}>
            <CompanyName>{company}</CompanyName>
            <FlexRow>
              <CompanyDescription>{description}</CompanyDescription>
              <Link href={link} target={'_blank'}>
                {link}
              </Link>
            </FlexRow>
            <Role>{role}</Role>
            <FlexRow>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{height: 20, width: 20}}
                color={'#45a2bc'}
              />
              {/*ago time countdown*/}
              <Label>{time}</Label>
            </FlexRow>
            <List>
              {map(responsibilities, (value, key) => (
                <Element key={key}>{value}</Element>
              ))}
            </List>
          </InfoColumn>
        ))}
      </ContentBlock>
    </Holder>
  );
};

export default Content;
