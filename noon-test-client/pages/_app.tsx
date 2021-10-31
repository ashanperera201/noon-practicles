import '../styles/globals.scss';
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap')
  // }, [])

  return <Component {...pageProps} />
}

export default MyApp
