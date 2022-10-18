import { Provider } from "react-redux";
import Head from "next/head";
import store from "../store";
import ReactReduxFirebaseWrapper from "../components/ReactReduxFirebaseProvider";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>
          Fashion Nova | Fashion Online For Women | Affordable Women's Clothing
          | Fashion Nova
        </title>
      </Head>
      <Provider store={store}>
        <ReactReduxFirebaseWrapper>
          <Component {...pageProps} />
        </ReactReduxFirebaseWrapper>
      </Provider>
    </div>
  );
}

export default MyApp;
