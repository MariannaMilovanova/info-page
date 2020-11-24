import react from '../../static/icons/react.png';
import redux from '../../static/icons/redux.svg';
import vue from '../../static/icons/vue.png';
import sass from '../../static/icons/sass.png';
import es6 from '../../static/icons/es6.png';
import next from '../../static/icons/next-js.svg';
import story from '../../static/icons/storybook.png';
import graphQl from '../../static/icons/graphQl.png';
import ts from '../../static/icons/ts.png';
import jest from '../../static/icons/jest.png';
import node from '../../static/icons/node.png';
import aws from '../../static/icons/aws.png';
import mongo from '../../static/icons/mongo.png';
import i18n from '../../static/icons/i18n.png';

export const skills = {
  set1: [
    {
      label: 'React JS',
      img: react
    },
    {
      label: 'Redux / Redux-saga',
      img: redux
    },
    {
      label: 'Vue.js / Web Extensions',
      img: vue
    }
  ],
  set2: [
    {
      label: 'SASS / BEM / Styled Components',

      img: sass
    },
    {
      label: 'ECMAScript 6 / BABEL / Webpack',
      img: es6
    },
    {
      label: 'SSR / Next.js',
      color: 'white',
      img: next
    }
  ],
  set3: [
    {
      label: 'Storybook',
      img: story
    },
    {
      label: 'GraphQL',
      img: graphQl
    },
    {
      label: 'Typescript',

      img: ts
    }
  ],
  set4: [
    {
      label: 'Jest, E2E, Testing-library/React',
      img: jest
    },
    {
      label: 'Node.js / Express',
      img: node
    },
    {
      label: 'AWS / AWS Lambda',
      img: aws,
      color: 'white'
    }
  ],
  set5: [
    {
      label: 'Mongo DB / Mongoose',
      img: mongo
    },
    {
      label: 'Localization / i18n',
      img: i18n
    }
  ]
};

export const experience = [
  {
    company: 'SHELF.IO',
    description: 'American startup, SaaS knowledge sharing platform',
    link: 'https://shelf.io',
    role: 'Web Developer',
    time: 'from Nov 2017 - Present',
    responsibilities: [
      'Create self-contained, reusable, and testable modules with React JS',
      'Work with Chrome/Firefox web extension on Vue.js that grabbing different content from the page',
      'Externalize localizable strings store them in separate repository with the help of i18next library',
      `Create separate isolated components in React Storybook with writing different UI states and test all callbacks behavior for further reuse in multiple places and projects. Component examples: toast notifications (to replace
       Materialize.dialogs library), sweet alerts with custom design (to replace SweetAlert library), progress bar, etc.`,
      `Integrate isolated React components in Meteor app, and completing it in Blaze that compiles template files into JavaScript code`,
      `Operate in a Agile software lifecycle with the combination of Scrum and Extreme Programming methodologies`,
      'Unit tests, refactoring Blaze to React, MongoDB and Lambda',
      'GraphQL, Next.js'
    ]
  },
  {
    company: 'BINARY STUDIO ACADEMY',
    description:
      'Intensive JS (React) course that combined detailed technical instruction with real-world simulation of working on commercial projects',
    link: 'https://academy.binary-studio.com/en',
    role: '',
    time: 'May 2017 - Sep 2017',
    responsibilities: [
      '3-step Admission with competition up to 3500 people',
      'Actively participate in project within a set time frame and using modern agile development methodologies under the guidance of experienced developers',
      'Technologies: React & Redux, ES6, Babel, Webpack, Semantic UI, Sass, Ramda, Node.js & Express, Passport, MongoDB & Mongoose, Socket.io',
      'Project description: ease-of-use of dynamic spreadsheets with the power of database. Powerful filtering and sorting of records. All changes are instantly synced across all devices and teammates'
    ]
  },
  {
    company: 'GAMELOFT',
    description: 'Leading digital and social French game publisher',
    link: 'https://www.gameloft.com/',
    role: 'Business Performance Manager',
    time: 'Feb 2016 - Feb 2017',
    responsibilities: [
      'Define the performance strategy of the games to maximize their revenues through all distributions channels at a worldwide level',
      'Work closely with the production team to define, set-up and optimize the in-game operation systems. Test and feedback on features and core mechanics of the future updates'
    ]
  },
  {
    company: '4i CONSULTING GROUP',
    role: 'Business Analyst',
    time: 'Feb 2014 - Feb 2016'
  },
  {
    company: 'DELOITTE TOUCHE TOHMATSU, CONSULTING DEPARTMENT',
    role: 'Business Analyst',
    time: 'June 2013 - Feb 2014'
  }
];
