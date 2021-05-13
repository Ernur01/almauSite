import Link from 'next/link'
import { MainLayout } from '../components/MainAlmauLayout'
import styles from '../styles/strategy.module.scss'


export default function Strategy() { 
    return(
        <MainLayout title="Стратегия">
            <main>
                <div className={styles.first_block}>
                    <div className={styles.first_block_container}>
                        <div className={styles.fb_small_container}>
                            <div className={styles.fbc_top}>
                                <h1>Видение AlmaU до 2025</h1>
                                <p>Алматы Менеджмент Университет — предпринимательский, социально-ответственный университет мирового уровня.</p>
                            </div>
                            <div className={styles.fbc_bottom}>
                                <h1>Миссия AlmaU</h1>
                                <p>Мы формируем новое поколение лидеров с предпринимательским мышлением и вносим вклад в развитие экономики знаний динамично развивающихся обществ.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.second_block}>
                    <div className={styles.second_block_container}>
                        <div className={styles.sb_small_container}>
                            <div className={styles.sb_heading}>
                                <h1>Наши ценности</h1>
                                <span className={styles.sb_line}></span>
                            </div>
                            <div className={styles.sbsc_first}>
                                <h3>1 Командный дух и синергия</h3>
                                <p>Мы сплочённая команда профессионалов, работающая по принципу «Win-Win-Win» для обеспечения синергетического успеха университета, бизнеса и государства.</p>
                            </div>
                            <div className={styles.sbsc_second}>
                                <div className={styles.sbsc_second_first}>
                                    <h3>2  Лидерство </h3>
                                    <p>Мы стремимся быть агентами изменений, демонстрировать предпринимательское мышление и культуру, управлять своим развитием.</p>
                                </div>
                                <div className={styles.sbsc_second_second}>
                                    <h3>3  Честность и открытость</h3>
                                    <p>Мы приверженцы интеллектуальной честности и открыто транслируем наши намерения в работе и общении, всегда готовы к обмену идеями и совершенствованию.</p>
                                </div>
                            </div>
                            <div className={styles.sbsc_third}>
                                <div className={styles.sbsc_third_first}>
                                    <h3>4  Ответственность </h3>
                                    <p>AlmaU отвечает за результаты своей деятельности перед партнерами, обучающимся, коллегами, создаем с ними прочные связи, работая во благо общества.</p>
                                </div>
                                <div className={styles.sbsc_third_second}>
                                    <h3>5  Разнообразие и инклюзия</h3>
                                    <p>Мы ценим социокультурное многообразие и стремимся к созданию атмосферы взаимного уважения, когда каждый сотрудник и обучающийся вносит свой вклад и добивается успеха.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.third_block}>
                    <div className={styles.third_block_container}>
                        <div className={styles.third_block_content_container}>
                            <h1>Стратегические направления</h1>
                            <div className={styles.third_block_content}>
                                <div className={styles.third_block_left_content}>
                                    <p><span>АКАДЕМИЧЕСКОЕ ПРЕВОСХОДСТВО: </span>
                                        личностно-ориентированное образование, 
                                        персонификация, онлайн-образование и lifelong learning.
                                    </p>
                                    <p>
                                        <span>ИССЛЕДОВАНИЯ И ИННОВАЦИИ: </span>усиление научно-исследовательских
                                        компетенций, развитие условий для генерации знаний и разработки инноваций.
                                    </p>
                                    <p>
                                        <span>ПРЕДПРИНИМАТЕЛЬСТВО ДЛЯ ВСЕХ: </span>развитие и распространение предпринимательского
                                        мышления и навыков среди людей всех профессий и возрастов, увеличение влияния
                                        университета на экономику и общественную жизнь.
                                    </p>
                                </div>
                                <div className={styles.third_block_right_content}>
                                    <p>Каждое стратегическое направление отвечает таким важным критериям как:</p>
                                    <p>
                                        <span>Устойчивое развитие</span> – позитивный вклад в развитие государства, общества 
                                        и бизнеса; сбалансированная и эффективная деятельность университета; 
                                        инклюзия, приверженность принципам бережливости.
                                    </p>
                                    <p>
                                        <span>Интернационализация</span> – привлечение иностранных студентов, преподавателей и сотрудников, 
                                        академическая мобильность, участие в международных исследованиях и коммерческих проектах.
                                    </p>
                                    <p>
                                        <span>Цифровизация</span> – внедрение цифровых технологий для облегчения и ускорения работы, 
                                        а также создания новых возможностей для университета.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.fourth_block}></div>
            </main>
        </MainLayout>
    )
 }

