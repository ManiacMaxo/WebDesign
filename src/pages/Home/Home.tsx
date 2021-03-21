import React from 'react'
import styles from './Home.module.scss'

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <main className={styles.root}>
            <h1>Hello World!</h1>
        </main>
    )
}

export default Home
