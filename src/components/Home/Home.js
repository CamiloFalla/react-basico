import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import PreviewMainfo from '../PreviewMaininfo/PreviewMaininfo';
import Infoshow from '../Infoshow/Infoshow';
import Bottonfocus from '../Bottonfocus/Bottonfocus';
import imageSrc from './../../images/imagescontent/almuerzopic.webp';
import logoips from './../../images/logos/logoips_poli.webp';
import guantes from './../../images/imagescontent/guantes.webp';
import aula from './../../images/imagescontent/capacitation.webp';
import payes from './../../images/icons/money1.svg'
import question from './../../images/icons/question1.svg'

function Home() {
  return (
    <div className="homepart">
      <div className="navbar-home">
        <Navbar />
        <div className='navbar-home-title'>
          <h1>Bienvenid@</h1>
          <img src={logoips} className="logo-navbar" />
        </div>
      </div>
      
      <PreviewMainfo 
        imageSrc={imageSrc}
        text="Noticias"
      />
      <div className="home-infoshow">
        <Infoshow
          backgroundImage={guantes}
          text="Medidas Sanitarias"
        
        />
        <Infoshow
          backgroundImage={aula}
          text="Capacitación"
        />
      </div>
      <div className="home-buttonfocus">
        <Bottonfocus 
          icon={question}
          text="Preguntas frecuentes"
        />
        <Bottonfocus 
          icon={payes}
          text="Metodos de pago"
        />
      </div>
      
      
    </div>
  );
}

export default Home ;