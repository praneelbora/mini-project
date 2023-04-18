import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
export default function App ({ Component, pageProps: { session, ...pageProps } }){

    return (
    <SessionProvider session={session}>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </Head>
        
    <Component {...pageProps} />
    </SessionProvider>);
    
}