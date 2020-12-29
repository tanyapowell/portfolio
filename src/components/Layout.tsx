import Head from 'next/head';
import Header from './Header';

interface Props {
    children: React.Component;
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
            <div className="content">{children}</div>
        </main>
    </>
);

export default Layout;
