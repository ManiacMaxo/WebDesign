import Head from 'next/head'
import { Layout } from '../components'
import styles from '../styles/Home.module.scss'

const Home = () => {
    return (
        <Layout>
            <Head>
                <title>BAGUN</title>
                <meta
                    name='description'
                    content='Learn how to build a personal website using Next.js'
                />
                <meta name='og:title' content='BAGUN' />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <div className={styles.root}>
                <h1>Hello World!</h1>
            </div>
        </Layout>
    )
}

export default Home
