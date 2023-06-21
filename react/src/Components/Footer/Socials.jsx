import React from 'react';
import Box from '@mui/material/Box';
import instagram from '../../Assets/instagram.png';
import twitter from '../../Assets/twitter.png';
import youtube from '../../Assets/youtube.png';
import tiktok from '../../Assets/tiktok.png';
import facebook from '../../Assets/fb.png';
import iconoCopy from '../../Assets/iconoCopy.jpg';
import './Footer.css';

function Socials() {
  return (
    <footer className="container__footer">
      {/* RRSS */}
      <div className="rrss">
        <a title="link_ig" href="https://www.instagram.com/">
          <img className="ig" src={instagram} alt="" />
        </a>

        <a title="link_tw" href="https://twitter.com/?lang=es">
          <img className="tw" src={twitter} alt="" />
        </a>

        <a title="link_yt" href="https://www.youtube.com/">
          <img className="yt" src={youtube} alt="" />
        </a>

        <a title="link_tk" href="https://www.tiktok.com/es/">
          <img className="tk" src={tiktok} alt="" />
        </a>

        <a title="link_fb" href="https://es-es.facebook.com/">
          <img className="fb" src={facebook} alt="" />
        </a>
      </div>

      {/* COPYR. */}
      <div className="copy">
        <div className="politica">
          <p>Política de privacidad, condiciones y Cookies</p>
        </div>

        <div className="fcopy">
        
          <img className="imgcopy" src={iconoCopy} alt="#" />
      
          <p>2023 Converso</p>
        </div>
      </div>
    </footer>
  );
}

export default Socials;