import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/store/slices/contactSlice";
import { getCurrentDate } from "../../helpers/functions";
import { clear } from "@testing-library/user-event/dist/clear";

const Contact = () => {

  const dispatch = useDispatch();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formValid, setFormValid] = useState(true)
  const [formSend, setFormSend] = useState(false)


  function handleSubmit(event){
    event.preventDefault();
    if([nombre, email, mensaje].includes('')){
      setFormValid(false)
    }else{
      setFormValid(true)
      dispatch( addContact( {nombre: nombre, email: email, mensaje: mensaje, fecha: getCurrentDate()} ))
      clearStates()
      mostrarMensaje()
    }
  }
  function clearStates(){
    setNombre('');
    setEmail('');
    setMensaje('');
    setFormValid(true)
  }
  function mostrarMensaje(){
    setFormSend(true);
    setTimeout(() => {
          setFormSend(false);
        }, 3000);
  }

  return (
    <div className="container">
      <h1 className=" text-success p-2">{formSend && 'Tu mensaje a sido enviado correctamente!'}</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Pepe Lopez"
          onChange={ (e) => setNombre(e.target.value) } 
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="lpepec@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">
          Mensaje:
        </label>
        <textarea
          className="form-control"
          id="mensaje"
          rows="3"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
      </div>
      <div className="row w-50 m-auto">
        <h3 className="badge text-bg-danger p-2 ">{ !formValid &&'Todos los campos son obligatorios.'}</h3>
      </div>
      <button className="btn btn-primary" type="submit" >Enviar Consulta</button>
    </form>
    </div>
  );
};

export default Contact;
