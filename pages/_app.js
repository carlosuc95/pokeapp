import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from "../components/layout/footer";
import Nav from "../components/layout/Nav";
import Head from "next/head";
const theme = extendTheme({
  colors: {
    houm: {
      500: "#FF452B",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
