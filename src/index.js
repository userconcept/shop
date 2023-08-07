import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/partials/main.scss';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);
