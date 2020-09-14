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
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </div>
      )

}

export default MyApp
