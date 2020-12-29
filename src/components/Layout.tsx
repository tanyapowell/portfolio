import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, pageTitle, description }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='Description' content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <main>
      <Header />
      <div className='content'>{children}</div>
    </main>
  </>
);

export default Layout;
