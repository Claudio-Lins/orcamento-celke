import Layout from "../components/Layout";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)




import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
