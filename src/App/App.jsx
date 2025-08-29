import React from 'react';
import {createRoot} from 'react-dom/client';
import Routing from './Routing';
import './index.css';

const App = () => {
  return <Routing />;
};

createRoot(document.getElementById('root')).render(<App />);
