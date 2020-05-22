import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.register(form);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>
          Regístrate
        </h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>
          Iniciar sesión
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Register);
