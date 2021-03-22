import { Footer, Header } from '.'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }: { children?: any }) => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <main>{children}</main>
            </main>
            <Footer />
        </>
    )
}

export default Layout
