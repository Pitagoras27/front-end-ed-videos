import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { sendForm } from '../actions';
import Header from '../components/Header/Header';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setEmail] = useState({
    email: '',
  });
  const handleForm = (e) => {
    setEmail({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendForm(form);
    props.history.push('/');
    // console.log(form, 'a');
  };

  return (
    <>
      <Header isLogin='headerLogin' />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleForm}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleForm}
            />
            <button className='button' type='submit'>
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label>
                <input
                  type='checkbox'
                  id='cbox1'
                  value='first_checkbox'
                />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='google' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='twitter' />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  sendForm,
};

export default connect(null, mapDispatchToProps)(Login);
