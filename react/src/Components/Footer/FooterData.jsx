import React from 'react';
import cajaEnvio from '../../Assets/cajaEnvio.jpg';
import devolucion from '../../Assets/devolucion.png';
import calendario from '../../Assets/calendario.png';
import './Footer.css';

/*import "./Footer.css";*/

function FooterData() {
  return (
    <>
      {/* SERVICIOS */}
      <section className="container__servicios">
        <div className="main__envio">
          <img className="icono__caja" src={cajaEnvio} alt="caja" />
          <h3>Envío rápido y gratuito</h3>
        </div>

        <div className="main__devoluciones">
          <img className="icono__devolucion" src= {devolucion} alt="devolución" />
          <h3>Devoluciones sencillas</h3>
        </div>

        <div className="main__seguimiento">
          <img className="icono__calendario" src={calendario} alt="calendario" />
          <h3>Haz un seguimiento de tu pedido</h3>
        </div>
      </section>

      {/* REGISTRO */}
      <section className="container__registro">
        <div className="registro__texto">
          <h4 className="registro__titulo">Regístrate para recibir noticias y actualizaciones</h4>
          <p className="registro__cuerpo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim commodi quaerat deleniti quo facilis, quis fugiat eaque. Quod, vel. Dolorem.</p>
        </div>

        <div className="main__correo">
          <input type="email" placeholder="Correo electrónico" />
          <input type="submit" value="&rarr;" />
        </div>
      </section>
    </>
  );
}

export default FooterData;