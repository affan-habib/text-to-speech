import { Page } from '../types/elements';

export const samplePage: Page = {
  id: 'page-1',
  width: 800,
  height: 1200,
  elements: [
    {
      id: 'text-1',
      type: 'text',
      position: { x: 50, y: 50, width: 700, height: 200 },
      htmlContent: `
        <h2>Introduction to React</h2>
        <p>React is a JavaScript library for building user interfaces. 
        It lets you create reusable UI components that manage their own state.</p>
      `
    },
    {
      id: 'mcq-1',
      type: 'mcq',
      position: { x: 50, y: 300, width: 700, height: 250 },
      question: 'What is the primary purpose of React?',
      options: [
        {
          id: 'opt-1',
          text: 'Building user interfaces',
          isCorrect: true
        },
        {
          id: 'opt-2',
          text: 'Database management',
          isCorrect: false
        },
        {
          id: 'opt-3',
          text: 'Server-side rendering only',
          isCorrect: false
        }
      ]
    },
    {
      id: 'text-2',
      type: 'text',
      position: { x: 50, y: 600, width: 700, height: 150 },
      htmlContent: `
        <h3>Key Features</h3>
        <ul>
          <li>Virtual DOM for better performance</li>
          <li>Component-based architecture</li>
          <li>Unidirectional data flow</li>
        </ul>
      `
    }
  ]
};