import {GlobalStyle} from "../components/styledcomp"


export default function MyApp({ Component, pageProps }) {
    return (
      <> 
      <GlobalStyle />
        <Component {...pageProps} />     
      </>
      
    )
  }
