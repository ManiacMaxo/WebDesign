import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <span>© BAGUN | All rights reserved</span>
                <div>
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/tos'>Terms</Link>
                    <Link to='/cookies'>Cookies</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
