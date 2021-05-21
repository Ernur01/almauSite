import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import MainCard from '../components/MainCard'
import MiniNavigation from '../components/MiniNavigation'
import styles from '../styles/shim.module.scss'


export default function Shim(){
    return(
        <MainLayout title="Школа Инженерного Менеджмента">
            <main>
                <div className={styles.first_block}>
                    <div className={styles.first_block_container}>
                        <nav className={styles.fb_nav}>
                            <div className={styles.fb_nav_left}>
                                <div className={"col"}><p>О школе</p></div>
                                <div className={"col"}><p>Обучающимся</p></div>
                            </div>
                            <div className={styles.fb_nav_right}>
                                <div className={"col"}><p>Консультативный</p></div>
                                <div className={"col"}><p>Преподаватели</p></div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={styles.second_block}>
                    <div className={styles.second_block_container}></div>
                </div>
            </main>
        </MainLayout>
    )
}