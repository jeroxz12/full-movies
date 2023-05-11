import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <h1 className='text-center'>About Us</h1>
    <div className="card mb-3">
      <img src="https://cdn2.dineroenimagen.com/media/dinero/images/2023/03/conviene-comprar-membresia-cine.jpg" className="card-img-top h-50" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Quienes Somos</h5>
        <p className="card-text">Somos un equipo de apasionados cinéfilos que se dedican a brindarte la mejor experiencia de cine posible. Nos encanta el cine y nos apasiona compartir nuestro amor por él con el mundo. Desde los clásicos hasta las últimas novedades, estamos siempre al tanto de lo que sucede en la industria cinematográfica. ¡Únete a nosotros para disfrutar de una experiencia cinematográfica inolvidable!</p>
      </div>
    </div>
    </>
  )
}

export default AboutUs