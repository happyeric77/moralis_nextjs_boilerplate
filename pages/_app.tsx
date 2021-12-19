import type { AppProps /*, AppContext */ } from 'next/app'
import "../components/layout/Layout"
import Layout from '../components/layout/Layout'
import { MoralisProvider } from "react-moralis";
// import 'antd/dist/antd.css'
require("../styles/custom.less");

function MyApp({ Component, pageProps }: AppProps) {
  
  return <>
  <MoralisProvider appId={String(process.env.NEXT_PUBLIC_APPLICATION_ID)} serverUrl={String(process.env.NEXT_PUBLIC_SERVER_URL)}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MoralisProvider>
  </>
}

export default MyApp