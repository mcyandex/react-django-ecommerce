import { Container } from 'react-bootstrap'

import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

import HomeSecreen from './screens/HomeSecreen';

function App() {
  return (
    <div >
     <Header/>
      <main className='py-3'>
        <Container>
          <HomeSecreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
