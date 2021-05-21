import styles from '../styles/main.module.scss'


export default function MiniNavigation({list}){
    const staticBlue = {
        color: "#13447E",
        "text-decoration": "border",
        "border-bottom": "4px solid #13447E"
    }
    return(
        <>
            <nav className={styles.fb_nav}>
                <ul>
                    {list.map(e => (
                        e.id == 1 ? <li style={staticBlue}>{e.text}</li> : <li>{e.text}</li>
                    ))}
                </ul>
            </nav>
        </>
    )
}