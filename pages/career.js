import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/career.module.scss'


export default function Сareer(){
    return(
        <MainLayout title="Аккредитация">
            <main>
                <div className={styles.first_block}>
                    <div className={styles.first_block_container}>
                        <h1>Карьера и вакансии</h1>
                        <p className={styles.fb_text}>УО «Алматы Менеджмент Университет» объявляет конкурс на замещение вакантных<br />должностей профессорско-преподавательского состава на 2020-2021 учебный год:</p>
                        <div>
                            <div className={"row row-cols-1 row-cols-lg-2 g-4"}>
                                <div className={"col"}>
                                    <div className={styles.card}>
                                        <div>
                                            <h5 className={styles.card_header_title}>Школа менеджмента</h5>
                                            <p className={styles.card_light_text}>20.05.2021</p>
                                        </div>
                                        <section>
                                            <p className={styles.card_subtitle}></p>
                                             <p className={styles.card_md_text}>(бакалавриат, ОП «Финансы», формат занятий: blended, навыки работы в Moodle, Microsoft Teams, Zoom, на вебинарных платформах)</p>
                                        </section>
                                        <div>
                                            <Link href="/"><a className={styles.card_button}>Подробнее</a></Link>
                                            <p className={styles.card_light_text}>Автор: отдел HR</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={styles.card}>
                                        <div>
                                            <h5 className={styles.card_header_title}>Управление академического превосходства и методологии <span>(конкурс)</span></h5>
                                            <p className={styles.card_light_text}>20.05.2021</p>
                                        </div>
                                        <section>
                                            <p className={styles.card_subtitle}>Ассистент-модератор</p>
                                            <p className={styles.card_md_text}>В обучающей среде: ассистировать в проведении занятий преподавателю., ст. Преподавателю, доценту, в случае наличия практического опыта</p>
                                        </section>
                                        <div>
                                            <Link href="/"><a className={styles.card_button}>Подробнее</a></Link>
                                            <p className={styles.card_light_text}>Автор: отдел HR</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={styles.card}>
                                        <div>
                                            <h5 className={styles.card_header_title}>Управление онлайн-образования  <span>(конкурс)</span></h5>
                                            <p className={styles.card_light_text}>20.05.2021</p>
                                        </div>
                                        <section>
                                            <p className={styles.card_subtitle}>Управление онлайн-образования</p>
                                            <p className={styles.card_md_text}>Разработка/актуализация электронных материалов (наполнение онлайн курсов) согласно техническому заданию заказчика</p>
                                        </section>
                                        <div>
                                            <Link href="/"><a className={styles.card_button}>Подробнее</a></Link>
                                            <p className={styles.card_light_text}>Автор: отдел HR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.second_block}>
                    <div className={styles.second_block_container}>
                        <h1>Контактная информация</h1>
                        <div className={styles.sb_content}>
                            <div>
                                <h5>Адрес</h5>
                                <p>
                                    Розыбакиева 227
                                    Алматы, 050060, Казахстан
                                </p>
                            </div>
                            <div>
                                <h5>Электронная почта</h5>
                                <p>
                                    E-mail: info@almau.edu.kz
                                </p>
                            </div>
                            <div>
                                <h5>Телефон для справок</h5>
                                <p>
                                    8 (727) 313 30 40
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}