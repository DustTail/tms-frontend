import '../styles/globals.css';
import configureStore from '../redux/configureStore';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={configureStore()}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
