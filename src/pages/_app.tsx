import Head from 'next/head'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globals'
import { ModalContent } from '../template/modalContent'
import { ApolloProvider } from "@apollo/client";
import { client } from '../../graphql/apollo-client'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo';
import { ModalAddPin } from '../template/modalAddPin/modalAddPin';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
               integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
               crossOrigin="" />
         </Head>
         <DefaultSeo {...SEO} />
         <ModalContent />
         <GlobalStyle />
         <ApolloProvider client={client}>
            <ModalAddPin />
            <Component {...pageProps} />
         </ApolloProvider>
      </>
   )
}

export default MyApp