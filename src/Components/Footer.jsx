import React from 'react';
//We're Making Footer that can be exported as an component 
function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start">
        <div className="text-white text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
          © 2024 Copyright:
          <a className="text-white m-2" href="/" style={{ textDecoration: 'none' }}>❤️ Arnab Purkaystha</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
