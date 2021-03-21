import React from 'react'
import styles from './News.module.scss'

interface Props {}

const News: React.FC<Props> = () => {
    return (
        <main className={styles.root}>
            <h1>News page</h1>
        </main>
    )
}

export default News
