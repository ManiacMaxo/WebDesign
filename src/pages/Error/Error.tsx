import React from 'react'
import styles from './Error.module.scss'

interface Props {
    code: number
}

const Error: React.FC<Props> = (props) => {
    return (
        <main className={styles.root}>
            <h1>{props.code}</h1>
        </main>
    )
}

export default Error
