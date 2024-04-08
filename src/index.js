import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const notes = [
  {
    key: 1,
    title: "Study Toc",
    content:
      "Unit 5 has to be completed"
  },
  {
    key: 2,
    title: "study ffsd",
    content:
      "Unit 5 has to be completed"
  },
  {
    key: 3,
    title: "ccn assignment",
    content:
      "Unit 5 has to be completed in order to be able to complete the assignment"
  },
  {
    key: 4,
    title: "Ai study",
    content:
      "Unit 5 has to be completed"
  }
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default notes;