import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/ulytau.module.scss'


export default function Ulytau() { 
    return(
        <MainLayout title="Проект Улытау">
            <main>
                <div className={styles.first_block}>
                    <div className={styles.first_block_container}>
                        <div className={styles.fb_heading}>
                            <h1>Проект "Улытау"</h1>
                            <span className={styles.fb_line}></span>
                        </div>
                        <div className={styles.fb_content}>
                            <div className={styles.fb_top_content}>
                                <h3>Дорогие друзья!</h3>
                                <p>
                                    Алматы Менеджмент Университет представляет Вашему вниманию программу инновационного проекта по изучению казахского языка «Культурно-лингвистический лагерь «Улытау»
                                    Мы приглашаем к участию всех желающих освоить казахский язык и ближе познакомиться с культурой, обычаями и традициями казахов.
                                </p>
                            </div>
                            <div className={styles.fb_bot_cont}>
                                <div className={styles.bot_left}>

                                </div>
                                <Link href="/"><a className={styles.btn}>Подробная информация здесь</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
 }