import {faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';

export const skills = {
  set1: [
    {
      label: 'React JS',
      icon: faReact
    },
    {
      label: 'Redux / Redux-saga',
      icon: faReact
    },
    {
      label: 'Vue.js / Web Extensions',
      icon: faReact
    },
    {
      label: 'HTML & CSS & SASS & BEM',
      icon: faReact
    },
    {
      label: 'ECMAScript 6 / BABEL / Webpack',
      icon: faReact
    },
    {
      label: 'SSR / Next.js',
      icon: faReact
    },
    {
      label: 'Storybook',
      icon: faReact
    }
  ],
  set2: [
    {
      label: 'GraphQL',
      icon: faReact
    },
    {
      label: 'Typescript',
      icon: faReact
    },
    {
      label: 'Jest, E2E, Testing-library/React',
      icon: faReact
    },
    {
      label: 'Node.js / Express',
      icon: faNodeJs
    },
    {
      label: 'AWS / AWS Lambda',
      icon: faReact
    },
    {
      label: 'Mongo DB / Mongoose',
      icon: faReact
    },
    {
      label: 'Localization / i18n',
      icon: faReact
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
  }
];
