import './index.css'
import React from 'react'
import MyNav from './components/Navbar';
import Footer from './components/Footer';

export default function PageLayout(props) {
  return (
    <div style={{display:"flex", flexDirection:"column",minHeight:"100vh"}}>
      <MyNav />
        <div style={{flexGrow:"1"}}>
            {props.children}
        </div>
      <Footer />
    </div>
  );
}