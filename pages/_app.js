import "../styles/global.scss";
import dynamic from "next/dynamic"
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootreducers from "../redux/rootreducers"
const Header=dynamic(()=>import("../Components/Header"));
const store=createStore(rootreducers)
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
