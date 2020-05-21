import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../assets/styles/components/Header.scss';
import gravatar from '../../utils/gravatar';
import logo from '../../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const existUserGravar = Object.keys(user);

  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__img'
          src={logo}
          alt='Platzi Video'
        />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={existUserGravar.length > 0 ? gravatar(user.email) : userIcon}
            alt=''
          />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Header);

