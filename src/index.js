import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/card.css'
import './styles/tracks.css'
import './styles/designtrack.css'
import './styles/heroes.css'
import './styles/student.css'
import './styles/blog.css'
import './pages/contactUsPage/style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

