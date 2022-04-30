import "../styles/globals.scss";
import { AppProps } from "next/app";
import Header from "@components/Header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <div className="main-wrapper">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
