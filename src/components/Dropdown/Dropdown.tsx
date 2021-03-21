import React from 'react'
import styles from './Dropdown.module.scss'

interface Props {
    display: boolean
}

const Dropdown: React.FC<Props> = (props) => {
    return props.display ? (
        <div className={styles.root}>
            <div className={styles.wrapper}>{props.children}</div>
        </div>
    ) : null
}

export default Dropdown
