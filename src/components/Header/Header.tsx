import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Dropdown } from '../Dropdown'
import styles from './Header.module.scss'

interface Props {}

const Header: React.FC<Props> = () => {
    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Link to='/' className={styles.logo}>
                        <img src='/images/cat.svg' alt='logo home' />
                    </Link>
                    <ul className={styles.routes}>
                        <li>
                            <Link to='/news'>news</Link>
                        </li>
                        <li className={styles.dropdown}>
                            <span>
                                teams <i className='fas fa-angle-down'></i>
                            </span>
                        </li>
                        <li>
                            <Link to='/join'>join bagun</Link>
                        </li>
                        <li>
                            <Link to='/about'>about</Link>
                        </li>
                    </ul>
                </div>
                <Dropdown display={false}>
                    <Link to='/team/rainbow-6-siege'>
                        <img src='/images/siege.webp' alt='rainbow 6 siege' />
                        Rainbow 6: Siege
                    </Link>
                    <Link to='/team/valorant'>
                        <img src='/images/valorant.webp' alt='valorant' />
                        Valorant
                    </Link>
                    <Link to='/team/destiny'>
                        <img src='/images/destiny.webp' alt='destiny' />
                        Destiny
                    </Link>
                    <Link to='/team/league-of-legends'>
                        <img
                            src='/images/league.webp'
                            alt='league of legends'
                        />
                        League of Legends
                    </Link>
                </Dropdown>
                <div className={styles.right}>
                    <Link to='#'>
                        <FaShoppingBag />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
