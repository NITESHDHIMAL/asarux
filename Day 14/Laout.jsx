import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Laout = (props) => {
  return (
    <>
    <Header/>

    {props.children}
    <Footer/>
    </>
  )
}

export default Laout