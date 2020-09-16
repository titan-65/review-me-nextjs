import '../styles/globals.css'
// import '../styles/bootstrap.min.css'
// import '../styles/now-ui-kit.min.css'
// import '../styles/now-ui-kit.min_v=1.3.1.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Head>
          <title>Review Me</title>
          <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"/>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossOrigin="anonymous"></script>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </div>
      )

}

export default MyApp
