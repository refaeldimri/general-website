import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
