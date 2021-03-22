import styles from './Dropdown.module.scss'

interface Props {
    children: any
    display: boolean
}

const Dropdown = ({ children, display }: Props) => {
    return (
        <div className={`${styles.root} ${display ? null : styles.hidden}`}>
            <div className={styles.wrapper}>{children}</div>
        </div>
    )
}

export default Dropdown
