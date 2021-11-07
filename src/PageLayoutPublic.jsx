import './index.css'
import React from 'react'
import Footer from './components/Footer';

export default function PageLayoutPublic(props) {
  return (
    <div style={{display:"flex", flexDirection:"column",minHeight:"100vh"}}>
        <div style={{flexGrow:"1", backgroundColor:"#212529"}}>
            {props.children}
        </div>
      <Footer />
    </div>
  );
}