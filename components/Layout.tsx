import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  pageTitle: string;
  description: string;
}

const Layout = ({ children, pageTitle, description }: Props) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <main>
      <Header />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mt-8 mb-16 w-5/6 md:w-full">
        {children}
      </div>
      <Footer />
    </main>
  </>
);

export default Layout;
