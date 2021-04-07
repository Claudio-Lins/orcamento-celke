import Layout from "../components/Layout";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
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
