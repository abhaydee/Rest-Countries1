import "../styles/global.scss";
import {Provider} from "react-redux"
import {createStore} from "redux"
import rootreducers from "../redux/rootreducers"
const store=createStore(rootreducers)
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
