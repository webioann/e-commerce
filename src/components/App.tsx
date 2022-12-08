import React from 'react'
import { Routes, Route } from "react-router-dom"
import Container from './Container'
import ModalPortal from './ModalPortal'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Home_page from '../pages/Home_page'
import Account_page from '../pages/Account_page'
import Cart_page from '../pages/Cart_page'
import Checkout_page from '../pages/Checkout_page'
import Login_page from '../pages/Login_page'
import ProductDetails_page from '../pages/ProductDetails_page'
import Shop_page from '../pages/Shop_page'
import Signup_page from '../pages/Signup_page'
import Notfound_page from '../pages/Notfound_page'

const  App: React.FC = () => {
  
  return (
    <Container>
      <Header/>
      <Main>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="shop" element={<Shop_page />} />
          <Route path="shop/:id" element={<ProductDetails_page />} />
          <Route path="cart" element={
            <ModalPortal>
              <Cart_page />
            </ModalPortal>
          }/>

          <Route path="account" element={<Account_page />} />
          <Route path="checkout" element={<Checkout_page />} />
          <Route path="login" element={
            <ModalPortal>
              <Login_page />
            </ModalPortal>
          }/>
          <Route path="signup" element={
            <ModalPortal>
              <Signup_page />
            </ModalPortal>
          }/>


          <Route path="*" element={<Notfound_page />} />
        </Routes>
      </Main>
      <Footer/>
    </Container>
  )
}

export default App;
