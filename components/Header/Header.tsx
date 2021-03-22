import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaAngleDown, FaShoppingBag } from 'react-icons/fa'
import { Dropdown } from '../Dropdown'
import styles from './Header.module.scss'

const Header = () => {
    const location = useRouter()

    const [dropdown, setDropdown] = useState<boolean>(false)
    const [transform, setTransform] = useState<string | undefined>(undefined)

    const toggleDropdown = () => {
        setTransform(transform === styles.rotate ? undefined : styles.rotate)
        setDropdown(!dropdown)
    }

    useEffect(() => {
        if (dropdown) toggleDropdown()
        // eslint-disable-next-line
    }, [location])

    const teams = [
        {
            name: 'Destiny',
            slug: 'destiny'
        },
        {
            name: 'Valorant',
            slug: 'valorant'
        },
        {
            name: 'Rainbow 6: Siege',
            slug: 'rainbow-6-siege'
        },
        {
            name: 'League of Legends',
            slug: 'league-of-legends'
        }
    ]

    return (
        <header className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Link href='/'>
                        <a className={styles.logo}>
                            <img src='/images/logo.svg' alt='logo home' />
                        </a>
                    </Link>
                    <ul className={styles.routes}>
                        <li>
                            <Link href='/news'>
                                <a>news</a>
                            </Link>
                        </li>
                        <li
                            className={styles.dropdown}
                            onClick={toggleDropdown}
                        >
                            <span
                                className={
                                    location.pathname.includes('team')
                                        ? styles.active
                                        : undefined
                                }
                            >
                                teams <FaAngleDown className={transform} />
                            </span>
                        </li>
                        <li>
                            <Link href='/join'>
                                <a>join bagin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>about</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Dropdown display={dropdown}>
                    <>
                        {teams.map((team) => {
                            return (
                                <Link
                                    href={`/teams/${team.slug}`}
                                    key={team.slug}
                                >
                                    <a>
                                        <img
                                            src={`/images/${team.slug}.webp`}
                                            alt={team.name}
                                        />
                                        {team.name}
                                    </a>
                                </Link>
                            )
                        })}
                    </>
                </Dropdown>
                <div className={styles.right}>
                    <Link href='#'>
                        <a>
                            <FaShoppingBag />
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
