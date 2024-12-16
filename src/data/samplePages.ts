import { Page } from '../types/elements';

export const samplePages: Page[] = [
  {
    id: 'page-1',
    title: 'Introduction to Web Development',
    width: 800,
    height: 1200,
    elements: [
      {
        id: 'text-1',
        type: 'text',
        position: { x: 50, y: 50, width: 700, height: 200 },
        htmlContent: `
          <h2>Welcome to Web Development</h2>
          <p>Web development is the work involved in developing a website for the Internet or an intranet. 
          It can range from developing a simple single static page of plain text to complex web applications.</p>
        `
      },
      {
        id: 'image-1',
        type: 'image',
        position: { x: 50, y: 280, width: 700, height: 400 },
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
        alt: 'Web development workspace with laptop showing code',
        caption: 'Modern web development environment'
      },
      {
        id: 'mcq-1',
        type: 'mcq',
        position: { x: 50, y: 710, width: 700, height: 250 },
        question: 'Which of the following is a front-end technology?',
        options: [
          {
            id: 'opt-1',
            text: 'React',
            isCorrect: true
          },
          {
            id: 'opt-2',
            text: 'Node.js',
            isCorrect: false
          },
          {
            id: 'opt-3',
            text: 'PostgreSQL',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    id: 'page-2',
    title: 'Web Technologies',
    width: 800,
    height: 1200,
    elements: [
      {
        id: 'text-2',
        type: 'text',
        position: { x: 50, y: 50, width: 700, height: 150 },
        htmlContent: `
          <h2>Essential Web Technologies</h2>
          <p>Modern web development relies on several key technologies working together.</p>
        `
      },
      {
        id: 'video-1',
        type: 'video',
        position: { x: 50, y: 230, width: 700, height: 400 },
        url: 'https://example.com/sample-video.mp4',
        title: 'Introduction to HTML and CSS',
        description: 'Learn the basics of HTML and CSS in this introductory video'
      },
      {
        id: 'text-3',
        type: 'text',
        position: { x: 50, y: 660, width: 700, height: 300 },
        htmlContent: `
          <h3>Key Technologies</h3>
          <ul>
            <li><strong>HTML:</strong> Structure of web pages</li>
            <li><strong>CSS:</strong> Styling and layout</li>
            <li><strong>JavaScript:</strong> Interactive functionality</li>
            <li><strong>React:</strong> Building user interfaces</li>
          </ul>
        `
      }
    ]
  }
];