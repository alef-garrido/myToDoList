import './style.css';
import renderList from './utils/module1.js';

const bullets = [
  {
    description: 'Walk dogs',
    compleated: true,
    index: 1,
  },
  {
    description: 'Meal Prep',
    compleated: false,
    index: 2,
  },
  {
    description: 'Meditation',
    compleated: true,
    index: 3,
  },
];

window.addEventListener('load', renderList(bullets));