import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/app/actions';
import { useEffect } from 'react';

function Home(props) {
    const { state, loadApp } = props;

    useEffect(() => {
        if (!state.isLoaded) {
            loadApp();
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div>isLoaded: {state.isLoaded.toString()}</div>
            </main>
        </div>
    );
}

const mapStateToProps = ({ app }) => ({ state: app });
export default connect(mapStateToProps, actions)(Home);
