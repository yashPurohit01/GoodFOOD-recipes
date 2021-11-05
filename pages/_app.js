import Layout from '../Components/layout'
import { wrapper } from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default wrapper.withRedux(MyApp);
