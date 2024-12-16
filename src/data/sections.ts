import { Section } from '../types/speech';

export const sections: Section[] = [
  {
    id: '1',
    title: 'Welcome to Our Platform',
    content: '',
    htmlContent: `
      <p>We provide <strong>innovative solutions</strong> for modern challenges.</p>
      <p>Our team is dedicated to delivering <em>excellence</em> in every project.</p>
      <ul>
        <li>Expert consultation</li>
        <li>24/7 support</li>
        <li>Cutting-edge technology</li>
      </ul>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Our Services',
    content: '',
    htmlContent: `
      <p>From <strong>digital transformation</strong> to <strong>cloud solutions</strong>, 
      we offer comprehensive services tailored to your needs.</p>
      <h3>Key Services:</h3>
      <ol>
        <li>Cloud Migration</li>
        <li>Digital Strategy</li>
        <li>Custom Development</li>
      </ol>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Why Choose Us',
    content: '',
    htmlContent: `
      <p>With <em>years of experience</em> and a <strong>passionate team</strong>, 
      we deliver results that exceed expectations.</p>
      <blockquote>
        "Innovation distinguishes between a leader and a follower."
      </blockquote>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
  }
];