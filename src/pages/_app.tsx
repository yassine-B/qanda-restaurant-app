import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import '@src/Styles/GlobalStyles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = ({ Component, pageProps }: any) => {
  useEffect(() => {
    const modalPortal = document.createElement('div');
    modalPortal.id = 'modal_portal';
    document.body.appendChild(modalPortal);
    return () => {
      document.body.removeChild(modalPortal);
    };
  }, []);
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
