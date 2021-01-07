import type { AppProps } from 'next/app';

import '@/styles/global.css';
import Layout from '@/components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
    <Layout pageTitle="Tanya Powell" description="Tanya Powell | Portfolio">
        <Component {...pageProps} />
    </Layout>
);

export default App;
