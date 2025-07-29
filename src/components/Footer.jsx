import React from 'react';
import '../Styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} WeatherApp. All rights reserved.</p>
      <p>Built with 🌦️ by Deepika</p>
    </footer>
  );
}

export default Footer;
