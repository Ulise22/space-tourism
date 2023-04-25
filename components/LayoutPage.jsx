import Head from 'next/head'
import Navbar from "./Navbar";

export default function LayoutPage ({children, title}) {
    return(
        <>
        <Head>
            <title>Space Tourism {title} </title>
            <meta name="description" content="An app about Space and tourism" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Navbar />
        
        <>
            {children}
        </>
            
        </>
    )
}