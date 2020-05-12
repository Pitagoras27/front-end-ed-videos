import React from 'react';
import '../../assets/styles/components/Search.scss';

const Seach = () => (
  <section className='main'>
    <h2
      className='main_title'
    >
      ¿Qué quieres ver hoy?
    </h2>
    <input
      type='text'
      className='input'
      placeholder='Buscar...'
    />
  </section>
);

export default Seach;
