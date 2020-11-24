import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {map} from 'lodash';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'antd';
import {experience, skills} from './data';
import {InfoColumn, Label} from '../ContactInfo/UIComponents';

export const Holder = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContentBlock = styled.div`
  width: 100%%;
  height: 100%;
  text-align: left;
  padding: 20px 10px;
  // flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #220087;
  text-transform: uppercase;
  text-align: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
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

export const Logo = styled.div<{img: string; color?: string}>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${({color}) => (color ? `background-color: ${color}` : 'transparent')};
  ${({img}) => (img ? `background-image: url(${img})` : '')};
  width: 23px;
  height: 23px;
`;

const Content = () => {
  return (
    <Holder>
      <FlexColumn>
        <Card
          hoverable={true}
          title={<Title style={{color: 'white'}}>TECHNOLOGY STACK</Title>}
          style={{backgroundColor: '#2a303b'}}
        >
          {map(skills, (column, key) => (
            <InfoColumn key={key} style={{padding: '0 20px'}}>
              {map(
                column,
                ({label, img, color}: {label: string; img: string; color?: string}, key) => (
                  <FlexRow key={key}>
                    <Logo img={img} color={color} />
                    <Label style={{color: 'white'}}>{label}</Label>
                  </FlexRow>
                )
              )}
            </InfoColumn>
          ))}
        </Card>
        <Card
          hoverable={true}
          title={<Title style={{color: 'white'}}>Languages</Title>}
          style={{backgroundColor: '#2a303b', flexGrow: 1}}
        ></Card>
      </FlexColumn>
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
