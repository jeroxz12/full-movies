import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const ContactList = () => {

    const { contacts } = useSelector(store => store.contacts)

    useEffect(() => {

    },[])
    
  return (
    <div className='container'>
        {contacts.length ? <table className="table">
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Mensaje</th>
    </tr>
  </thead>
  <tbody>
    {contacts && contacts.map((contact, a) => {
        return <tr key={a}>
            <th scope="row">{contact.fecha}</th>
            <td>{contact.nombre}</td>
            <td>{contact.email}</td>
            <td>{contact.mensaje}</td>
          </tr>
    })
}
  </tbody>
</table> : <h2>No hay consultas para mostrar</h2>}
        
    </div>
  )
}

export default ContactList