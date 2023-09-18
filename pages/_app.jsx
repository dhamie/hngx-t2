import { SessionProvider } from "next-auth/react"
import {GlobalStyle} from "../components/styledcomp"


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
      <> 
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />   
      </SessionProvider>        
      </>
      
    )
  }

  
