import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import {FallingLeaves} from 'falling-leaves/react';

createRoot(document.getElementById('root')).render(
    <>
    <FallingLeaves fullScreen/>
    <App />
    </>
    
)
