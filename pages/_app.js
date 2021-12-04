import '../styles/globals.sass'
import "../components/layout/Layout"
import Layout from '../components/layout/Layout'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }) {
  
  return <>
  <MoralisProvider appId={String(process.env.NEXT_PUBLIC_APPLICATION_ID)} serverUrl={String(process.env.NEXT_PUBLIC_SERVER_URL)}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MoralisProvider>
  </>
}

export default MyApp
