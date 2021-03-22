import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <footer className={styles.root}>
            <div className={styles.wrapper}>
                <span>© BAGUN | All rights reserved</span>
                <div>
                    <Link href='/privacy'>
                        <a>Privacy</a>
                    </Link>
                    <Link href='/tos'>
                        <a>Terms</a>
                    </Link>
                    <Link href='/cookies'>
                        <a>Cookies</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
