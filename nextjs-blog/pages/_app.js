import '../styles/global.css';
import { SessionProvider } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
export default function App ({ Component, pageProps: { session, ...pageProps } }){
    return (
    <SessionProvider session={session}>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            
        </Head>
        
    <Component {...pageProps} />
    </SessionProvider>);
    
}