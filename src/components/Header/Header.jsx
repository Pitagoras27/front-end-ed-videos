import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import gravatar from '../../utils/gravatar';
import logo from '../../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../../assets/static/user-icon.png';
import { logout } from '../../actions';
import '../../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const activeSesion = Object.keys(user).length > 0;
  const endOfSession = () => {
    props.logout({});
  };

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
            src={activeSesion ? gravatar(user.email) : userIcon}
            alt=''
          />
          <p>Perfil</p>
        </div>
        <ul>
          <li>{ activeSesion ? user.name : null }</li>
          {
            activeSesion ?
              (
                <li>
                  <a
                    href='#logout'
                    onClick={endOfSession}
                  >
                    Cerrar Sesión
                  </a>
                </li>
              ) :
              (<li><Link to='/login'>Iniciar Sesión</Link></li>)
          }
        </ul>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

