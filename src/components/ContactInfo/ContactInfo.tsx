import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faSkype} from '@fortawesome/free-brands-svg-icons';
import {
  faBirthdayCake,
  faEnvelope,
  faGlobeEurope,
  faGraduationCap,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {map} from 'lodash';
import {
  Block,
  Contact,
  Holder,
  InfoColumn,
  InfoContainer,
  Label,
  Name,
  Photo,
  Title
} from './UIComponents';

const contacts = {
  column1: [
    {
      icon: faGraduationCap,
      info: 'University of Houston'
    },
    {
      icon: faBirthdayCake,
      info: 'August 28, 1990'
    },
    {
      icon: faGlobeEurope,
      info: 'Ukrainian'
    }
  ],
  column2: [
    {
      icon: faPhone,
      info: '+38 (093) 288-59-03'
    },
    {
      icon: faEnvelope,
      info: 'marianna.v.milovanova@gmail.com'
    },
    {
      icon: faSkype,
      info: 'indomitable_temper'
    }
  ],
  column3: [
    {
      icon: faGithub,
      info: 'github'
    },
    {
      icon: faLinkedin,
      info: 'linkedin'
    }
  ]
};

const ContactInfo = () => {
  return (
    <Holder>
      <Photo />
      <InfoContainer>
        <Name>Marianna Milovanova</Name>
        <Title>Web Developer</Title>
        <Block>
          {map(contacts, (column, key) => (
            <InfoColumn key={key}>
              {map(column, ({icon, info}, key) => (
                <Contact key={key}>
                  <FontAwesomeIcon icon={icon} style={{height: 20, width: 20}} color={'#45a2bc'} />
                  <Label>{info}</Label>
                </Contact>
              ))}
            </InfoColumn>
          ))}
        </Block>
      </InfoContainer>
    </Holder>
  );
};

export default ContactInfo;
