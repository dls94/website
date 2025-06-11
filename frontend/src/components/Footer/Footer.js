import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='container'>
          <div className='bloc'>
              <h3>Contact</h3>
              <div className='data'>
                  <img src='/images/picto_lieu.svg' alt='adresse'/>
                  <p>32 rue Maurice Arnoux 92120 MONTROUGE</p>
              </div>
              <div className='data'>
                  <img src="/images/picto_mail.svg" alt=''/>
                  <p>contact@magnifymusic.fr</p>
              </div>
          </div>
          <div className='bloc'>
            <h3>Liens utiles</h3>
            <a href='/'>Mentions légales</a>
            <a href='/'>Politique de confidentialité</a>
          </div>
          <div className='bloc'>
            <h3>Réseaux Sociaux</h3>
              <div className='icon-rs'>
                <img src="/images/picto_facebook.svg" alt=''/>
                <img src="/images/picto_twitter.svg" alt=''/>
                <Link to="https://www.instagram.com/magnifymusic_/">
                  <img src="/images/picto_instagram.svg" alt=''/>
                </Link>
                
              </div>   
          </div>
        </div>
        <p>Copyright &copy; 2024 MAGNIFY MUSIC - TOUT DROITS RÉSERVÉS </p>
    </footer>
  );
}

export default Footer;
