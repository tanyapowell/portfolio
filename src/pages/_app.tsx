import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";

import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
    <Layout pageTitle="tanya title" description="tanya description">
        <Component {...pageProps} />
    </Layout>
);

export default App;
