import React from 'react';

import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <>
    { children }
    <Footer />
  </>
);

export default Layout;