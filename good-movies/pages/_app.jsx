import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss';
import Loading from '../components/loading';


import Nav from '../components/nav/Nav';

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossOrigin="anonymous" defer></script>
      </Head>
      <Component {...pageProps} fallback={<Loading />} />
      <Nav />
    </>
  )
}

export default MyApp
