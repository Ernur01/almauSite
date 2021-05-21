import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/administration.module.scss'


export default function Administration() { 
    const cardData = [{
        id: 0,
        img: "/administration/card_img1.jpg",
        title: "Кожахметов Асылбек Базарбаевич",
        text1: "Президент",
        text2: "Доктор Делового Администрирования (2011)",
        text3: "Тел.: (727) 313 40 59",
        text4: "Эл. почта: assistant@almau.edu.kz"
    },
    {
        id: 1,
        img: "/administration/card_img1.jpg",
        title: "Кожахметов Асылбек Базарбаевич",
        text1: "Президент",
        text2: "Доктор Делового Администрирования (2011)",
        text3: "Тел.: (727) 313 40 59",
        text4: "Эл. почта: assistant@almau.edu.kz"
    },
    {
        id: 2,
        img: "/administration/card_img1.jpg",
        title: "Кожахметов Асылбек Базарбаевич",
        text1: "Президент",
        text2: "Доктор Делового Администрирования (2011)",
        text3: "Тел.: (727) 313 40 59",
        text4: "Эл. почта: assistant@almau.edu.kz"
    },
    {
        id: 3,
        img: "/administration/card_img1.jpg",
        title: "Кожахметов Асылбек Базарбаевич",
        text1: "Президент",
        text2: "Доктор Делового Администрирования (2011)",
        text3: "Тел.: (727) 313 40 59",
        text4: "Эл. почта: assistant@almau.edu.kz"
    },
    {
        id: 4,
        img: "/administration/card_img1.jpg",
        title: "Кожахметов Асылбек Базарбаевич",
        text1: "Президент",
        text2: "Доктор Делового Администрирования (2011)",
        text3: "Тел.: (727) 313 40 59",
        text4: "Эл. почта: assistant@almau.edu.kz"
    }]
    return(
        <MainLayout title="Администрация">
            <main>
                <div className={styles.first_block}>
                    <div className={styles.fb_heading}>
                        <h1>Администрация</h1>
                        <span className={styles.fb_line}></span>
                    </div>
                    <div className={styles.content}>
                        <div className={"row row-cols-1 row-cols-lg-2 g-4"}>
                            {cardData.map(c => (
                                <div key={c.id} className={"col"}>
                                    <div className={styles.card}>
                                        <img src={c.img} />
                                        <div className={styles.card_body}>
                                            <div className={styles.card_content}>
                                                <h3>{c.title}</h3>
                                                <p>{c.text1}</p>
                                                <p>{c.text2}</p>
                                                <p>{c.text3}</p>
                                                <p>{c.text4}</p>
                                            </div>
                                        </div>
                                        <Link href="/"><a className={styles.card_btn}>Подробнее</a></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
 }

