import React, { useState } from 'react'
import { FaAngleDown, FaShoppingBag } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from '../Dropdown'
import styles from './Header.module.scss'

interface Props {}

const Header: React.FC<Props> = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const [transform, setTransform] = useState({})

    const toggleDropdown = () => {
        setTransform({ transform: 'rotate(180deg)' })
        setDropdown(!dropdown)
    }

    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <NavLink to='/' className={styles.logo}>
                        <img src='/images/cat.svg' alt='logo home' />
                    </NavLink>
                    <ul className={styles.routes}>
                        <li>
                            <NavLink to='/news' activeClassName={styles.active}>
                                news
                            </NavLink>
                        </li>
                        <li
                            className={styles.dropdown}
                            onClick={toggleDropdown}
                        >
                            <span>
                                teams <FaAngleDown style={transform} />
                            </span>
                        </li>
                        <li>
                            <NavLink to='/join' activeClassName={styles.active}>
                                join bagun
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                activeClassName={styles.active}
                            >
                                about
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Dropdown display={dropdown}>
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
