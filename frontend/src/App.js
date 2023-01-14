import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router >
     <Header/>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path ="/" element={ <HomeScreen /> } exact />
            <Route path ="/product/:id" element={ <ProductScreen /> } />
            <Route path ="/cart/:id?" element={ <CartScreen /> } />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
